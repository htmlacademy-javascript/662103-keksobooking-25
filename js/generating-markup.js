import {cardsOffers} from './create-new-offer.js';
const mapDesk = document.querySelector('#map-canvas');
const templateFragment = document.querySelector('#card').content;// Находим фрагмент с содержимым темплейта
const popUp = templateFragment.querySelector('.popup');// В фрагменте находим нужный элемент

const fragment = document.createDocumentFragment();

const typeHouse = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

cardsOffers.forEach((card) => {
  const element = popUp.cloneNode(true);// Клонируем элемент со всеми "внутренностями"
  //Выведите заголовок объявления offer.title в заголовок .popup__title.
  element.querySelector('.popup__title').textContent = card.offer.title;
  // Выведите адрес offer.address в блок .popup__text--address.
  element.querySelector('.popup__text--address').textContent = card.offer.address;
  // Выведите цену offer.price в блок .popup__text--price строкой вида {{offer.price}} ₽/ночь. Например, «5200 ₽/ночь».
  element.querySelector('.popup__text--price').textContent = card.offer.price + ' ₽/ночь';
  // В блок .popup__type выведите тип жилья offer.type, сопоставив с подписями:
  element.querySelector('.popup__type').textContent = typeHouse[card.offer.type];
  //Выведите количество гостей и комнат offer.rooms и offer.guests в блок .popup__text--capacity строкой вида {{offer.rooms}} комнаты для {{offer.guests}} гостей.
  // Например, «2 комнаты для 3 гостей».
  element.querySelector('.popup__text--capacity').textContent = card.offer.rooms + ' комнаты для ' + card.offer.guest + ' гостей';
  // Время заезда и выезда offer.checkin и offer.checkout в блок .popup__text--time строкой вида Заезд после {{offer.checkin}}, выезд до {{offer.checkout}}.
  // Например, «Заезд после 14:00, выезд до 14:00».
  element.querySelector('.popup__text--time').textContent = 'Заезд после ' + card.offer.checkin + ', выезд до ' + card.offer.checkout;
  // В список .popup__features выведите все доступные удобства в объявлении. Оптимизировать код
  const featureContainer = element.querySelector('.popup__features');
  const featureFragment = document.createDocumentFragment();
  const arrayFeatures = card.offer.features;
  console.log(featureContainer);
  console.log(arrayFeatures);
  arrayFeatures.forEach((feature) => {
    const featureList = featureContainer.querySelector(`.popup__feature--${  feature}`);
    if (featureList) {
      featureFragment.append(featureList);
    }
  });
  featureContainer.innerHTML = '';
  featureContainer.append(featureFragment);
  // В блок .popup__description выведите описание объекта недвижимости offer.description.
  element.querySelector('.popup__description').textContent = card.offer.description;
  // В блок .popup__photos выведите все фотографии из списка offer.photos.
  // Каждая из строк массива photos должна записываться как атрибут src соответствующего изображения.
  console.log(card.offer.photos.length);
  const offerPhotos = element.querySelector('.popup__photos')
  const offerPhoto = element.querySelector('.popup__photo');
  for (let i = 0; i < card.offer.photos.length; i++)  {
    offerPhoto.src = card.offer.photos[i];
    const cloneOfferPhoto = offerPhoto.cloneNode(true);
    if (i !== card.offer.photos.length - 1){
      offerPhotos.append(cloneOfferPhoto);
    }
  }
  // Замените значение атрибута src у аватарки пользователя .popup__avatar на значение поля author.avatar.
  element.querySelector('.popup__avatar').src = card.author.avatar;
  fragment.append(element);
});
mapDesk.append(fragment);
console.log(popUp);
console.log(mapDesk);

