'use strict';

var conversion = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

let EnterosRomanos = [50, 10, 10, 10, 1, 10];
let isLength = false;

function getNumeroRomanos_enteros(templateArray) {

  let rstArray = [];
  let tempArray = [];
  let sumtotal = 0;


  for (let index = 0; index < templateArray.length; ++index) {
    if (templateArray[index] < templateArray[index + 1]) {
      rstArray.push((index).toString() + '' + (index + 1).toString());
      tempArray.push(index, index + 1);
    }
  }

  if (rstArray.length == 0) {
    for (let index = 0; index < templateArray.length; ++index) {

      sumtotal += templateArray[index];
    }
  } else {
    if (rstArray.length == 1 || rstArray.length >= 2) {
      isLength = true;
      let strlSplit = rstArray.join(',').split(',');

      for (let index = 0; index < strlSplit.length; ++index) {
        sumtotal += (templateArray[strlSplit[index].split('')[0]] - templateArray[strlSplit[index].split('')[1]]) * -1;
      }

      if (rstArray.length == 1 && isLength) {
        for (let index = 0; index < templateArray.length; ++index) {
          if (!tempArray.includes(index)) {
            sumtotal += templateArray[index]
          }
        }

      }
    }
  }
  return sumtotal;
}

console.log(getNumeroRomanos_enteros(EnterosRomanos));















