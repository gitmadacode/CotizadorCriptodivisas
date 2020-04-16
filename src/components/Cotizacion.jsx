import React from "react";
import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;
const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

const Cotizacion = ({ resultado }) => {
  //si el objeto llega vacio no va retornar nada
  if (Object.keys(resultado).length === 0) return null;
  console.log(resultado);
  return (
    <div>
      <ResultadoDiv>
        <Precio>
          El precio es: <span>{resultado.PRICE}</span>
        </Precio>
        <Info>
          Precio mas alto del dia: <span>{resultado.HIGHDAY}</span>
        </Info>
        <Info>
          Precio mas bajo del dia: <span>{resultado.LOWDAY}</span>
        </Info>
        <Info>
          Variación ultimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span>
        </Info>
        <Info>
          Ultima actualización: <span>{resultado.LASTUPDATE}</span>
        </Info>
      </ResultadoDiv>
    </div>
  );
};

export default Cotizacion;
