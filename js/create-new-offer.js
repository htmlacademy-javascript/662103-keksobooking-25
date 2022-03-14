import {getRandomInteger, getRandomWithDot, getRandomArrayElement} from './utils.js';

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

const offerTypes = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const offerCheckInOuts = [
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

const offerDescriptions = [
  'Чистота и уют. Всегда вам рады у нас!',
  'Светлая солнечная сторона. Соседи тихие.',
  'Высокие потолки, чисто и просторно!',
  'Без тараканов!',
  'Не бабушкин ремонт, всё в стиле пусть-так!'
];

const offerPhoto = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const QUANTITY_CARDS = 10;

const authorAvatars = Array.from({length: QUANTITY_CARDS}, (v, k) => ++k);

const createNewOffer = () => {
  const latitude = getRandomWithDot(35.65000, 35.70000, 5);
  const longitude = getRandomWithDot(139.70000, 139.80000, 5);

  function getAuthorId() {
    let AUTHOR_ID = authorAvatars.shift();
    if (AUTHOR_ID < 10) {
      AUTHOR_ID = `0${String(AUTHOR_ID)}`;
    }
    return `img/avatars/user${  AUTHOR_ID  }.png`;
  }
  return {
    author: {
      avatar: getAuthorId()
    },
    offer: {
      title: getRandomArrayElement(offerTitle),
      address: `${latitude  }, ${  longitude}`,
      price: getRandomInteger(1000, 30000),
      type: getRandomArrayElement(offerTypes),
      rooms: getRandomInteger(1, 10),
      guest: getRandomInteger(1, 10),
      checkin: getRandomArrayElement(offerCheckInOuts),
      checkout: getRandomArrayElement(offerCheckInOuts),
      features: offerFeatures.slice(0, getRandomInteger(1, offerFeatures.sort(() => Math.random() - 0.5).length)),
      description: getRandomArrayElement(offerDescriptions),
      photos: offerPhoto.slice(0, getRandomInteger(1, offerPhoto.length))
    },
    location: {
      lat: latitude,
      lng: longitude
    }
  };
};

const cardsOffers = Array.from({length: QUANTITY_CARDS}, createNewOffer);

export {cardsOffers};
