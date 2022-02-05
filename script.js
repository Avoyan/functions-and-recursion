///////////////////////////////////////////////////////////////////////
// allDigitsIsOdd function
console.log("------allDigitsIsOdd function------");
///////////////////////////////////////////////////////////////////////
function allDigitsIsOdd(number) {
  let value = true;
  let digit = number % 10;

  if (digit % 2 === 0) {
    value = false
  }

  if (number >= 10 && value) {
    let rest = Math.floor(number / 10);
    value = allDigitsIsOdd(rest);
  }

  return value;
}


console.log(allDigitsIsOdd(4211133));
console.log(allDigitsIsOdd(7791));
console.log(allDigitsIsOdd(5));

///////////////////////////////////////////////////////////////////////
// arrayMinPositive function
console.log("------arrayMinPositive function------");
///////////////////////////////////////////////////////////////////////
function arrayMinPositive(array) {
  let value = -1;

  if (array.length > 0) {
    let lastEl = array.pop();
    if (lastEl >= 0) {
      value = lastEl;
    }   
    let el = arrayMinPositive(array);
    if (el >= 0) {
      value = el;
      if (lastEl >= 0 && lastEl < el) {
        value = lastEl;
      }
    }     
  }  
  return value;
}

console.log(arrayMinPositive([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(arrayMinPositive([45, -9, 15, 5, -78]));
console.log(arrayMinPositive([-5, -9, -111, -1000, -7]));

///////////////////////////////////////////////////////////////////////
// sortViolatingIndex function
console.log("------sortViolatingIndex function------");
///////////////////////////////////////////////////////////////////////
function sortViolatingIndex(array) {
  let index = -1;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i+1]) {
      index = i+1;
    }
  }

  return index;
}

console.log(sortViolatingIndex([2, 12, 15, 48, 64]));
console.log(sortViolatingIndex([-9, -4, -4, 3, 12, 4, 5]));

///////////////////////////////////////////////////////////////////////
// arrayShift function
console.log("------arrayShift function------");
///////////////////////////////////////////////////////////////////////

function arrayShift(array) {
  let newArray = [];

  if (array.length > 1) {
    let value = array.pop()
    newArray = [...arrayShift(array), value];
  }

  return newArray;
}

console.log(arrayShift([6, 78, 'n', 0, 1]));
console.log(arrayShift([5]));
console.log(arrayShift([]));


///////////////////////////////////////////////////////////////////////
// arrayFlat function
console.log("------arrayFlat function------");
///////////////////////////////////////////////////////////////////////

function arrayFlat(array) {
  const newArray = [];

  for (let el of array) {
    if (Array.isArray(el)) {
      newArray.push(...arrayFlat(el));
    } else {
      newArray.push(el);
    }
  }

  return newArray;
};

console.log(arrayFlat([1, [3, 4, [1, 2]], 10]));
console.log(arrayFlat([14, [1, [[[3, []]]], 1], 0]));

///////////////////////////////////////////////////////////////////////
// arrayRotate function
console.log("------arrayRotate function------");
///////////////////////////////////////////////////////////////////////

function arrayRotate(array, n) {
  if (n === 0) {
    return array;
  } 

  if (n > 0) {
    array.push(array.shift())
    array = arrayRotate(array, --n);
  } else {
    array.unshift(array.pop())
    array = arrayRotate(array, ++n);
  }

  return array;
};

console.log(arrayRotate(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
console.log(arrayRotate(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));

///////////////////////////////////////////////////////////////////////
// numberDigitsSum function
console.log("------numberDigitsSum function------");
///////////////////////////////////////////////////////////////////////
function numberDigitsSum(number) {
  let value = 0;

  while (number > 0) {
    value += number % 10;
    number = Math.floor(number / 10);
  }
  
  if (value >= 10) {
    value = numberDigitsSum(value);
  }

  return value;
}

console.log(numberDigitsSum(14));
console.log(numberDigitsSum(29));
console.log(numberDigitsSum(999999999999));

///////////////////////////////////////////////////////////////////////
// objectDeepClone function
console.log("------objectDeepClone function------");
///////////////////////////////////////////////////////////////////////
function objectDeepClone(obj) {
  const newBoj = {};

  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  for (let prop in obj) {
    newBoj[prop] = objectDeepClone(obj[prop])
  }

  return newBoj;
}

let obj1 = {a:1, b:2, o1: {c:3, d:4, o2:{e:5}, f:6}, g:7};
let obj2 = objectDeepClone(obj1);
obj1.o1.d = 8;
console.log(obj1);
console.log(obj2);