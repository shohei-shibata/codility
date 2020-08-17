console.log("lesson 2 - CyclicRotation");

N = Math.pow(10, 7) + 1;
n = (N - N%2)/2;
testArr = [];

while (testArr.length < N) {
  const randomInt = Math.floor(Math.random() * 100 + 1);
  if ( testArr.length + 1 === N ) {
    testArr.push(randomInt);
  } else {
    testArr.push(randomInt, randomInt);
  }
}

//console.log(`Test array = ${testArr}`);

const start = performance.now();

//OddOccurrencesInArray(testArr);
OddOccurrencesInArrayImproved(testArr);

function finished(res, start) {
  const end = performance.now();
  console.log(`Result = ${res}`);
  console.log(`It took ${end-start} ms`);
}

function OddOccurrencesInArray(A) {
  const sorted = A.sort();
  for ( i = 0; i < A.length; i=i+2 ) {
    if ( i === sorted.length - 1 || ( sorted[i+1] && sorted[i] !== sorted[i+1] )) {
      return finished(sorted[i], start);
    }
  }
}

function OddOccurrencesInArrayImproved(A) {
  let occ = {};
  for ( i = 0; i < A.length; i++ ) {
    const item = A[i];
    if (occ[item]) { occ[item]++; } 
    else { occ[item] = 1; }

    if ( i === A.length - 1 ) {
      return finished(findOddOccurrence(occ), start); 
    }
  }
}

function findOddOccurrence(obj) {
  const keys = Object.keys(obj);
  return keys.find(key => {
    return obj[key] % 2 !== 0;
  });
}

const testArr1 = [
  [[1,2,3,4,5],1],
  [[0,0,1],3],
  [[],5]
];

const testArr2 = [
  [9,3,9,3,9,7,9],
  [9,3,9,3,9,9,7],
  [1,5,5,1,2,2,4,3,3,4,9]
];

function CyclicRotation(A, K) {
  if (!Array.isArray(A)) {
    return null;
  } else if (A.length === 0) {
    return A;
  } else {
    if (K <= 0) {
      return A;
    } else {
      const last = A.reverse().shift();
      const arr = A.concat(last).reverse();
      return CyclicRotation(arr, K-1); 
    }
  }
}

