import React from "react";
import { ButtonBody } from "./Button.styled";
function Button({ valueHeight, valueWeight, setResult }) {
  const handleClick = () => {
    const imc = valueWeight / (valueHeight * valueHeight);
    const text = textIMC(imc);
    if (valueWeight && valueHeight)
      setResult("IMC: " + imc.toFixed(2) + " " + "(" + text + ")" + ".");
  };
  const textIMC = (imc) => {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
      return "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
      return "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
      return "Obesidade grau 1";
    } else if (imc >= 35 && imc <= 39.9) {
      return "Obesidade grau 2";
    } else if (imc >= 40) {
      return "Obesidade grau 3";
    }
  };
  return <ButtonBody onClick={handleClick}>Calcular</ButtonBody>;
}

export default Button;
