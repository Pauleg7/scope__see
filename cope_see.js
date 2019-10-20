'use strict';
/*----- Задача № 1 -----*/
console.log('----------------------------------Задача № 1----------------------------------');

const tax = 73;
let salesTax = 0;

function summSalesTax (price) {
  salesTax += price /100 * tax;
}

summSalesTax(1000);
summSalesTax(2589);
summSalesTax(3569);

console.log(`Налог с продаж (${tax} %), к оплате: ${salesTax} Q`);

/*----- Задание № 2 -----*/
console.log('----------------------------------Задача № 2----------------------------------');

let wrapperBalance = 500;

function calcNeedWrapper(long, width, height) {
  return ((width * long) + (width * height) + (long *height)) * 2;
}

function printWrapperAct(long, width, height) {
  let wrapperArea = calcNeedWrapper(long, width, height);
  if (wrapperBalance >= wrapperArea) {
    wrapperBalance -= wrapperArea;
    return `Заказ (${long}/${width}/${height}) упакован, осталось упаковочной бумаги ${wrapperBalance} м2`;
  } else {
    return `Заказ (${long}/${width}/${height}) не упакован, осталось упаковочной бумаги ${wrapperBalance} м2`;
  }
}

console.log(printWrapperAct(20, 3, 40));
console.log(printWrapperAct(2, 3, 4));
console.log(printWrapperAct(20, 3, 40));
console.log(printWrapperAct(2, 30, 4));

/*----- Задача № 3 -----*/
console.log('----------------------------------Задача № 3----------------------------------');
const teleports = [7, 2, 1, 4, 8];

const counters = [];

for (let i = 0; i < teleports.length; i++) {
  counters[i] = function() {
    if (teleports[i] < 0) {
      return false;
    } else {
      return --teleports[i];
    }
  }
}


function print(numTrleport) {
  counters[numTrleport - 1]();

  if (teleports[numTrleport - 1] > 0) {
    return `Телепорт ${numTrleport} использован, заряд — ${teleports[numTrleport - 1]} единиц`;
  } else if (teleports[numTrleport - 1] === 0) {
    return `Телепорт ${numTrleport} использован, заряд — ${teleports[numTrleport - 1]} единиц, требуется перезарядка!`;
  } else {
    return `Телепорт ${numTrleport} недоступен, перезаряжается`
  }
}

console.log(print(2));
console.log(print(1));
console.log(print(1));
console.log(print(1));
console.log(print(1));
console.log(print(1));
console.log(print(1));
console.log(print(1));
console.log(print(3));
console.log(print(5));
console.log(print(4));
console.log(print(5));
console.log(print(2));
console.log(print(2));
console.log(print(2));
console.log(print(1));
