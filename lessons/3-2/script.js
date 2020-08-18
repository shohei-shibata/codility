const testCases = [
  [10, 85, 30]
];

function solution(X, Y, D) {
  return Math.ceil((Y-X)/D);
}

testCases.forEach(item => {
  console.log('Input', item);
  console.log('Output', solution(...item));
});
