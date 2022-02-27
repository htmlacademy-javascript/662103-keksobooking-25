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
    return ((Math.random() * (max - min)) + min).toFixed(digits);
  }
  return 'Исходные данные неверны';
}

// тут потом переделать {0}
const authorAvatar = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];

const offerTitle = [
  'Спешите успеть!',
  'Только сегодня!',
  'Завтра будет дороже!',
  'Кто успел, тот и заехал',
  'Без труда, найдешь жильё у пруда',
  'Дёшево!',
  'Не дёшево, зато комфорт!',
  'С вами будет Кекс!',
  'Милая и уютная жилплощадь',
  'Только за доллары'
];

const offerType = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const offerCheckInOut = [
  '12:00',
  '13:00',
  '14:00'
];

const offerFeatures = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const offerDescription = [
  'Чистота и уют. Всегда вам рады у нас!',
  'Светлая солнечная сторона. Соседи тихие.',
  'Высокие потолки, чисто и просторно!',
  'Без тараканов!',
  'Не бабушкин ремонт, всё в стили пусть-так!'
];

const offerPhotos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const createNewObject = () => {
  const latitude = getRandomWithDot(35.65000, 35.70000, 5);
  const longitude = getRandomWithDot(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: authorAvatar[getRandomInteger(0, authorAvatar.length - 1)]
    },
    offer: {
      title: offerTitle[getRandomInteger(0, offerTitle.length - 1)],
      address: `${String(latitude)  }, ${  String(longitude)}`,
      price: getRandomInteger(1000, 30000),
      type: offerType[getRandomInteger(0, offerType.length - 1)],
      rooms: getRandomInteger(1, 10),
      guest: getRandomInteger(1, 10),
      checkin: offerCheckInOut[getRandomInteger(0, offerCheckInOut.length - 1)],
      checkout: offerCheckInOut[getRandomInteger(0, offerCheckInOut.length - 1)],
      features: offerFeatures.slice(0, getRandomInteger(1, offerFeatures.length)),
      description: offerDescription[getRandomInteger(0, offerDescription.length - 1)],
      photos: offerPhotos.slice(0, getRandomInteger(1, offerPhotos.length))
    },
    location: {
      lat: latitude,
      lng: longitude
    }
  };
};

const cardsOffer = Array.from({length: 10}, createNewObject);

