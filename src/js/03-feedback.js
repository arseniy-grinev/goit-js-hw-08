import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name=email]');
const messageInput = document.querySelector('[name=message]');

const SAVED_INPUT = 'feedback-form-state';
const formSavedData = {};

feedbackForm.addEventListener('input', throttle(onInput, 500));
feedbackForm.addEventListener('submit', onSubmit);

initAutocomplete();

function onInput(e) {
  formSavedData[e.target.name] = e.target.value;
  const savedText = JSON.stringify(formSavedData);
  localStorage.setItem(SAVED_INPUT, savedText);
}

function onSubmit(e) {
    e.preventDefault(); 
  const save = localStorage.getItem(SAVED_INPUT);
//   console.log(JSON.parse(save));
  localStorage.removeItem(SAVED_INPUT);
  e.target.reset();
}

function initAutocomplete() {
  const savedInput = localStorage.getItem(SAVED_INPUT);

  if (savedInput) {
    const textAutocomplete = JSON.parse(savedInput);
    // console.log(textAutocomplete);
    textAutocomplete.message
      ? (messageInput.value = textAutocomplete.message)
      : (messageInput.value = '');

    textAutocomplete.email
      ? (emailInput.value = textAutocomplete.email)
      : (emailInput.value = '');

  }
}
