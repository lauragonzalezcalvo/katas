"use strict";

const ft_opposite = (number) => {
  if (number > 0) {
    return "-" + number;
  } else {
    return number * -1;
  }
};

console.log(ft_opposite(-2));
