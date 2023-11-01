import throttle from 'lodash.throttle';

const formEl = document.querySelector('.js-feedback-form');
formEl.addEventListener('input', throttle(onInput, 250));
const submitBtn = document.querySelector('.js-submit');
submitBtn.addEventListener('click', onClick);

const startObj = JSON.parse(localStorage.getItem('feedback-form-state')) || '';

formEl.elements.message.value = startObj.message ? startObj.message : '';
formEl.elements.email.value = startObj.email ? startObj.email : '';

const infoObjekt = {};

function onInput(e) {
  if (e.target.name === 'email') {
    infoObjekt.email = e.target.value;
  } else {
    infoObjekt.message = e.target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(infoObjekt));
}

function onClick(e) {
  e.preventDefault();
  formEl.removeEventListener('input', onInput);
  if (!infoObjekt.email && !infoObjekt.email) {
    infoObjekt.message = formEl.elements.message.value;
    infoObjekt.email = formEl.elements.email.value;
  }
  formEl.reset();
}
