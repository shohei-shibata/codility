const N = Math.pow(10,1);
let longCase = generateCase(N);

function generateCase(n) {
  let arr = [];
  for (let k=0; k<N+1; k++) {
    arr.push(k+1);
  }
  arr.splice(Math.floor(Math.random()*(N+1)),1);
  return arr;
}

const testCases = [
  [],
  [1],
  [2],
  [1, 2, 3, 5, 6, 9, 7, 8],
  longCase
];

function solutionA(A) {
  let i = A.length + 1;
  while ( i > 0 ) {
    if ( A.indexOf(i) === -1 ) {
      return i;
    }
    i--;
  }
}

function solutionB(A) {
  A.sort();
  for (let i=0; i<A.length; i++) {
    if (A[i] != i+1) {
      return i+1; 
    }
  }
}

function solutionC(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length === 0) {
        return 1;
    } else {
        A.sort((a,b) => a-b);
        for (let i=0; i<A.length; i++) {
            if (A[i] != i+1) {
                return i+1;
            }
        }
        return A.length + 1;
    }
}

testCases.forEach(item => {
  console.log('Input', item);
  //console.log('Output A', solutionA(item));
  //console.log('Output B', solutionB(item));
  console.log('Output C', solutionC(item));
});
