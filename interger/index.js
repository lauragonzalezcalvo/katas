"use strict";
const ft_transform = (number) => {
  if (number <= 0 || number > 0) {
    const numberChar = number.toString();
    return numberChar;
  } else {
    return "Introduce un número válido";
  }
};
console.log(ft_transform("2"));
