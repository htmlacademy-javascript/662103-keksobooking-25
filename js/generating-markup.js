import {cardsOffers} from './create-new-offer.js';
const mapDesk = document.querySelector('#map-canvas');
const templateFragment = document.querySelector('#card').content;
const popUpCard = templateFragment.querySelector('.popup');

const fragmentCard = document.createDocumentFragment();

const typeHouse = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

cardsOffers.forEach(({offer, author}) => {
  const element = popUpCard.cloneNode(true);
  element.querySelector('.popup__title').textContent = offer.title;
  element.querySelector('.popup__text--address').textContent = offer.address;
  element.querySelector('.popup__text--price').textContent = `${offer.price  } ₽/ночь`;
  element.querySelector('.popup__type').textContent = typeHouse[offer.type];
  element.querySelector('.popup__text--capacity').textContent = `${offer.rooms  } комнаты для ${  offer.guest  } гостей`;
  element.querySelector('.popup__text--time').textContent = `Заезд после ${  offer.checkin  }, выезд до ${  offer.checkout}`;

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

  element.querySelector('.popup__description').textContent = offer.description;

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

  element.querySelector('.popup__avatar').src = author.avatar;
  fragmentCard.append(element);
});
mapDesk.append(fragmentCard);

