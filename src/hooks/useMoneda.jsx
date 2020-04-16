import React, { Fragment, useState } from "react";
import styled from '@emotion/styled';

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;
const Select = styled.select`
  width: 100%;
  display:block;
  padding: 1rem;
  -webkit-appearance:none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;


const useMoneda = (label,stateInicial,MONEDAS) => {
  //State de nuestro custom Hook, aca lo declaramos
  const [state, actualizarState] = useState(stateInicial);
  //damos por implicito el return , aca se pone lo que se mostrara en pantalla
  //Siempre al usar map , debes poner un  key
  const Seleccionar = () => (
  

    <Fragment>
      <Label>{label}</Label>
      <Select
      onChange={e => actualizarState(e.target.value)}
      value={state}
      >
        <option value="">-Seleccione-</option>
        {MONEDAS.map(MONEDAS => (
          
          <option key={MONEDAS.codigo} value={MONEDAS.codigo}>{MONEDAS.nombre}</option>
        ))}
      </Select>
    </Fragment>
  );
  //Retornar state,interfaz y fn que modifica el state
  return [state, Seleccionar, actualizarState];
};

export default useMoneda;
