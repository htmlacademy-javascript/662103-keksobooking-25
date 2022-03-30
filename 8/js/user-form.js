const userForm = document.querySelector('.ad-form');
const price = userForm.querySelector('#price');
const typeOfPrice = userForm.querySelector('#type');
const roomNumber = userForm.querySelector('#room_number');
const capacity = userForm.querySelector('#capacity');
const timeIn = userForm.querySelector('#timein');
const timeOut = userForm.querySelector('#timeout');
const adTimeInOut = userForm.querySelector('.ad-form__element--time');
const MIN_PRICE_OF_TYPE_HOUSE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};
const MAX_PRICE_FOR_NIGHT = 100000;
const ROOM_GUESTS = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0']
};

const pristine = new Pristine(userForm, {
  classTo: 'ad-form__element',// Элемент, на который будут добавляться классы
  errorClass: 'ad-form__item--invalid', // Класс, обозначающий невалидное поле
  successClass: 'ad-form__item--valid', // Класс, обозначающий валидное поле
  errorTextParent: 'ad-form__element',// Элемент, куда будет выводиться текст с ошибкой
  errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
  errorTextClass: 'ad-form__error',// Класс для элемента с текстом ошибки
}, true);

function validateTitle (value) {
  return value.length >= 30 && value.length <= 100;
}

pristine.addValidator(
  userForm.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов', 2, true,
);

function validatePrice (value) {
  return value <= MAX_PRICE_FOR_NIGHT;
}

pristine.addValidator(
  price,
  validatePrice,
  `Цена за ночь не может превышать ${MAX_PRICE_FOR_NIGHT}`, 2, true,
);

function priceComparison () {
  const typesOfHouse = typeOfPrice.querySelectorAll('option');
  for (let i = 0; i < typesOfHouse.length; i++) {
    if (typesOfHouse[i].selected) {
      price.placeholder = MIN_PRICE_OF_TYPE_HOUSE[typesOfHouse[i].value];
      price.min = price.placeholder;
    }
  }
  return `Цена не меньше ${price.min}`;
}

typeOfPrice.addEventListener('change', priceComparison);

function validateMinPrice () {
  return price.value >= MIN_PRICE_OF_TYPE_HOUSE[typeOfPrice.value];
}

pristine.addValidator(
  price,
  validateMinPrice,
  priceComparison, 2, true,
);


const validateGuest = () => ROOM_GUESTS[roomNumber.value].includes(capacity.value);
const getGuestErrorMessage = () => 'Выберите другое кол-во гостей';

pristine.addValidator(
  capacity,
  validateGuest,
  getGuestErrorMessage,
);

roomNumber.addEventListener('change', () => {
  pristine.validate(capacity);
});

const onTimeInOutChange = (evt) => {
  timeIn.value = timeOut.value = evt.target.value;
};

adTimeInOut.addEventListener('change', onTimeInOutChange);

userForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (isValid) {
    // alert('Можно отправлять');
  } else {
    evt.preventDefault();
    // alert('Форма невалидна');
  }
});
