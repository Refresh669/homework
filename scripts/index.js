'use strict'

const x = 4;
const y = 9;
const r = 10;

const hypotenuse = Math.sqrt(x * x + y * y);
const result = hypotenuse <= r ? "Точка лежит внутри окружности" : "Точка за пределами окружности";

alert(result);
