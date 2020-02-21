const getNumber = (min, max) => {
  if (min === 1) min++;

  let primeNumber = [];

  primeNum: for (let i = min; i <= max; i++) {
    for (let j = min; j < i; j++) {
      if (i % j === 0) {
        continue primeNum;
      }
    }
    primeNumber.push(i);
  }

  return primeNumber;
};

const generateNumbers = () => {
  let numbers = getNumber(1, 50);
  let mappedArray = [];

  numbers.map((item, index) => {
    return mappedArray.push({
      value: item,
      id: index,
      visible: false,
      disabled: false
    });
  });

  const combinedArray = [...mappedArray, ...mappedArray].sort(() => {
    return 0.5 - Math.random();
  });

  return combinedArray;
};

export default generateNumbers;
