function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= 0 && max >= 0 && max > min && min !== String && max !== String) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'Исходные данные неверны';
}

function getRandomWithDot(min, max, digits) {
  if (min >= 0 && max >= 0 && max > min && min !== String && max !== String) {
    return Number(((Math.random() * (max - min)) + min).toFixed(digits));
  }
  return 'Исходные данные неверны';
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger, getRandomWithDot, getRandomArrayElement};
