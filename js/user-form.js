const userForm = document.querySelector('.ad-form');
const price = userForm.querySelector('#price');
const typeOfPrice = userForm.querySelector('#type'); //для второго задания
const roomNumber = userForm.querySelector('#room_number');
const capacity = userForm.querySelector('#capacity');
console.log(capacity);
const minPriceOfTypeHouse = { //для второго задания
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
});

function validateTitle (value) {
  return value.length >= 30 && value.length <= 100;
}

pristine.addValidator(
  userForm.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов', 2, true,
);

function validatePrice (value) {
  return value <= 100000;
}

pristine.addValidator(
  price,
  validatePrice,
  `Цена за ночь не может превышать ${MAX_PRICE_FOR_NIGHT}`, 2, true,
);

const validateGuest = () => ROOM_GUESTS[roomNumber.value].includes(capacity.value);//поменять имена
const getGuestErrorMessage = () => 'Выберите другое кол-во гостей';

pristine.addValidator(
  capacity,
  validateGuest,
  getGuestErrorMessage,
);

roomNumber.addEventListener('change', () => {
  pristine.validate(capacity);
});

userForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (isValid) {
    alert('Можно отправлять');
  } else {
    evt.preventDefault();
    alert('Форма невалидна');
  }
});
