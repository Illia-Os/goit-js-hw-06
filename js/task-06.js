const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
  const expectedLength = parseInt(validationInput.dataset.length);
  const enteredLength = validationInput.value.length;

  validationInput.classList.remove('valid', 'invalid');

  if (enteredLength === expectedLength) {
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.add('invalid');
  }
});
