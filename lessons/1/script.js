console.log("lesson 1");

const arrToTest = [1, 5, 32, 100, 529];

function BinaryGap(N) {
  const binary = N.toString(2);
  let count = 0;
  let largest = 0;
  console.log(binary);
  for (let i=0; i<binary.length; i++) {
    if (binary[i]==="0") {
      count++;
    } else {
      if (count > largest) { largest = count }
      count = 0;
    }
  }
  return largest;
}

arrToTest.forEach(printResult);

function printResult(item) {
  console.log(BinaryGap(item));
}
