import {cardsOffers} from './create-new-offer.js';
const mapDesk = document.querySelector('#map-canvas');
const templateFragment = document.querySelector('#card').content;// Находим фрагмент с содержимым темплейта
const popUpCard = templateFragment.querySelector('.popup');// В фрагменте находим нужный элемент

const fragmentCard = document.createDocumentFragment();

const typeHouse = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

cardsOffers.forEach(({offer, author}) => {
  const element = popUpCard.cloneNode(true);// Клонируем элемент со всеми "внутренностями"
  //Выведите заголовок объявления offer.title в заголовок .popup__title.
  element.querySelector('.popup__title').textContent = offer.title;
  // Выведите адрес offer.address в блок .popup__text--address.
  element.querySelector('.popup__text--address').textContent = offer.address;
  // Выведите цену offer.price в блок .popup__text--price строкой вида {{offer.price}} ₽/ночь. Например, «5200 ₽/ночь».
  element.querySelector('.popup__text--price').textContent = `${offer.price  } ₽/ночь`;
  // В блок .popup__type выведите тип жилья offer.type, сопоставив с подписями:
  element.querySelector('.popup__type').textContent = typeHouse[offer.type];
  //Выведите количество гостей и комнат offer.rooms и offer.guests в блок .popup__text--capacity строкой вида {{offer.rooms}} комнаты для {{offer.guests}} гостей.
  // Например, «2 комнаты для 3 гостей».
  element.querySelector('.popup__text--capacity').textContent = `${offer.rooms  } комнаты для ${  offer.guest  } гостей`;
  // Время заезда и выезда offer.checkin и offer.checkout в блок .popup__text--time строкой вида Заезд после {{offer.checkin}}, выезд до {{offer.checkout}}.
  // Например, «Заезд после 14:00, выезд до 14:00».
  element.querySelector('.popup__text--time').textContent = `Заезд после ${  offer.checkin  }, выезд до ${  offer.checkout}`;
  // В список .popup__features выведите все доступные удобства в объявлении. Оптимизировать код

  const featureItems = element.querySelectorAll('.popup__feature');
  const arrayFeatures = offer.features;

  featureItems.forEach((featureItem) => {
    const isNecessary = arrayFeatures.some(
      (arrayFeature) => featureItem.classList.contains(`popup__feature--${  arrayFeature}`),
    );
    if (!isNecessary) {
      featureItem.remove();
    }
  });

  // В блок .popup__description выведите описание объекта недвижимости offer.description.
  element.querySelector('.popup__description').textContent = offer.description;
  // В блок .popup__photos выведите все фотографии из списка offer.photos.
  // Каждая из строк массива photos должна записываться как атрибут src соответствующего изображения.
  const offerPhotos = element.querySelector('.popup__photos');
  const offerPhoto = element.querySelector('.popup__photo');
  if (offer.photos.length) {
    for (let i = 0; i < offer.photos.length; i++) {
      offerPhoto.src = offer.photos[i];
      const cloneOfferPhoto = offerPhoto.cloneNode(true);
      if (i !== offer.photos.length - 1) {
        offerPhotos.append(cloneOfferPhoto);
      }
    }
  } else {
    offerPhotos.classList.add('hidden');
  }

  // Замените значение атрибута src у аватарки пользователя .popup__avatar на значение поля author.avatar.
  element.querySelector('.popup__avatar').src = author.avatar;
  fragmentCard.append(element);
});
mapDesk.append(fragmentCard);

