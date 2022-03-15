const allInteractiveEllements = document.querySelectorAll('.ad-form__element');
const mapFilters = document.querySelectorAll('.map__filter');

function inActiveState() {
  document.querySelector('.ad-form').classList.add('ad-form--disabled');
  for (const interactiveElement of allInteractiveEllements) {
    interactiveElement.setAttribute('disabled', 'true');
  }
  document.querySelector('.ad-form__slider').setAttribute('disabled', 'true');
  document.querySelector('.map__filters').classList.add('map__filters--disabled');
  for (const mapFilter of mapFilters) {
    mapFilter.setAttribute('disabled', 'true');
  }
  document.querySelector('.map__features').setAttribute('disabled', 'true');
}

function activeState() {
  document.querySelector('.ad-form').classList.remove('ad-form--disabled');
  for (const interactiveElement of allInteractiveEllements) {
    interactiveElement.removeAttribute('disabled');
  }
  document.querySelector('.ad-form__slider').removeAttribute('disabled');
  document.querySelector('.map__filters').classList.remove('map__filters--disabled');
  for (const mapFilter of mapFilters) {
    mapFilter.removeAttribute('disabled');
  }
  document.querySelector('.map__features').removeAttribute('disabled');
}

inActiveState();
activeState();
