function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= 0 && max >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function getRandomWithDot(min, max, digits) {
  if (min >= 0 && max >= 0 && max > min) {
    return ((Math.random() * (max - min)) + min).toFixed(digits);
  }
}

getRandomInteger(1, 19);
getRandomWithDot(0.123456789, 10.123456789, 3);
