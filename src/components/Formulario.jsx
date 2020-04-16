import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import Error from "./Error";
import axios from "axios";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #75e28b;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #27fbb8;
    cursor: pointer;
  }
`;

const Formulario = ({ guardarMoneda, guardarCriptomoneda }) => {
  //State del listado de criptomonedas / la respuesta de la API es un arreglo , por eso usar []
  const [listacripto, guardarCriptomonedas] = useState([]);
  //State para la validacion
  const [error, guardarError] = useState(false);

  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de USA" },
    { codigo: "MXN", nombre: "Peso mexicano" },
    { codigo: "UR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
    { codigo: "CLP", nombre: "Peso Chileno" },
  ];

  //Utilizar useMoneda (no importa el nombre que se les ponga)
  const [moneda, SelectMonedas] = useMoneda("Elige tu moneda", "", MONEDAS);

  //Utilizar useCriptomoneda
  const [criptomoneda, SelectCripto] = useCriptomoneda(
    "Elije tu criptomoneda",
    "",
    listacripto
  );

  //Ejecutar llamado a la API, CON AXIOS
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const resultado = await axios.get(url);

      guardarCriptomonedas(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  //Cuando el user hace submit
  //Validar si ambos campos estan llenos
   //pasar los datos al componente principal
  const cotizarMoneda = (e) => {
    e.preventDefault();
    
    if (moneda === "" || criptomoneda === "") {
      guardarError(true);
      return;
    }
   
    guardarError(false);
    guardarMoneda(moneda);
    guardarCriptomoneda(criptomoneda);
  };
  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <SelectMonedas />
      <SelectCripto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
