import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const FORM_KEY = 'feedback-form-state';

getFormData();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(e) {
  e.preventDefault();
  form.reset();
  localStorage.removeItem(FORM_KEY);
}

function onFormInput(e) {
  let formData = localStorage.getItem(FORM_KEY);
  formData = formData ? JSON.parse(formData) : {};
  formData[e.target.name] = e.target.value;
  formData = localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function getFormData() {
  let formData = localStorage.getItem(FORM_KEY);
  if (formData) {
    formData = JSON.parse(formData);
    Object.entries(formData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}


