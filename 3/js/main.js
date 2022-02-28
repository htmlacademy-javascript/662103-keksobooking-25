const OFFER_TITLES = [
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

const OFFER_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const OFFER_CHECK_IN_OUTS = [
  '12:00',
  '13:00',
  '14:00'
];

const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const OFFER_DESCRIPTIONS = [
  'Чистота и уют. Всегда вам рады у нас!',
  'Светлая солнечная сторона. Соседи тихие.',
  'Высокие потолки, чисто и просторно!',
  'Без тараканов!',
  'Не бабушкин ремонт, всё в стили пусть-так!'
];

const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const QUANTITY_CARDS = 10;

const AUTHOR_AVATARS = Array.from({length: QUANTITY_CARDS}, (v, k) => ++k);

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

const createNewOffer = () => {
  const latitude = getRandomWithDot(35.65000, 35.70000, 5);
  const longitude = getRandomWithDot(139.70000, 139.80000, 5);

  function getAuthorId() {
    let AUTHOR_ID = AUTHOR_AVATARS[0];
    if (AUTHOR_ID < 10) {
      AUTHOR_ID = `0${String(AUTHOR_ID)}`;
    }
    AUTHOR_AVATARS.shift();
    return `img/avatars/user${  AUTHOR_ID  }.png`;
  }
  return {
    author: {
      avatar: getAuthorId()
    },
    offer: {
      title: getRandomArrayElement(OFFER_TITLES),
      address: `${String(latitude)  }, ${  String(longitude)}`,
      price: getRandomInteger(1000, 30000),
      type: getRandomArrayElement(OFFER_TYPES),
      rooms: getRandomInteger(1, 10),
      guest: getRandomInteger(1, 10),
      checkin: getRandomArrayElement(OFFER_CHECK_IN_OUTS),
      checkout: getRandomArrayElement(OFFER_CHECK_IN_OUTS),
      features: OFFER_FEATURES.slice(0, getRandomInteger(1, OFFER_FEATURES.length)),
      description: getRandomArrayElement(OFFER_DESCRIPTIONS),
      photos: OFFER_PHOTOS.slice(0, getRandomInteger(1, OFFER_PHOTOS.length))
    },
    location: {
      lat: latitude,
      lng: longitude
    }
  };
};

const CARDS_OFFERS = Array.from({length: QUANTITY_CARDS}, createNewOffer);
// eslint-disable-next-line no-console
console.log(CARDS_OFFERS);
