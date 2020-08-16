console.log("lesson 2 - CyclicRotation");

const arrToTest = [
  [[1,2,3,4,5],1],
  [[0,0,1],3],
  [[],5],
  ["Not Array", 5]
];

function solution(A, K) {
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
      return solution(arr, K-1); 
    }
  }
}

arrToTest.forEach(printResult);

function printResult(item) {
  console.log(item, solution(...item));
}
