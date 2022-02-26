function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if ((min && max >= 0) && (min && max !== String) && max > min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return console.error('Исходные данные неверны');
}

function getRandomWithDot(min, max, digits) {
  if ((min && max >= 0) && (min && max !== String) && max > min) {
    return ((Math.random() * (max - min)) + min).toFixed(digits);
  }
  return console.error('Исходные данные неверны');
}

getRandomInteger(1, 19);
getRandomWithDot(0.123456789, 10.123456789, 3);
