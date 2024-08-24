const form = document.getElementById('createAccountForm');

function formValidation() {
  //input fields
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phone-number').value;
  const password = document.getElementById('password').value;
  const confirmedPassword = document.getElementById('confirm-password').value;

  //error fields
  const firstNameError = document.getElementById('firstName-error');
  const lastNameError = document.getElementById('lastName-error');
  const phoneError = document.getElementById('phone-error');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  const confirmedPasswordError = document.getElementById(
    'confirmPassword-error'
  );

  //error text color
  const errorColors = document.getElementsByClassName('error-message');
  for (let errorColor of errorColors) {
    errorColor.style.color = 'red';
  }

  let isValid = true; // flag to track the validity of the form

  if (firstName === '') {
    firstNameError.textContent = '* please enter valid first name';
    isValid = false; // mark form as invalid
  } else {
    firstNameError.textContent = ''; // clear previous error message
  }

  if (lastName === '') {
    lastNameError.textContent = '* please enter valid last name';
    isValid = false;
  } else {
    lastNameError.textContent = '';
  }

  if (password === '') {
    passwordError.textContent = '* please enter a valid password';
    isValid = false;
  } else if (password !== confirmedPassword) {
    passwordError.textContent = '* password does not match';
    isValid = false;
  } else {
    passwordError.textContent = '';
  }

  if (confirmedPassword === '') {
    confirmedPasswordError.textContent = '* please enter valid password';
    isValid = false;
  } else if (confirmedPassword !== password) {
    confirmedPasswordError.textContent = '* password does not match';
    isValid = false;
  } else {
    confirmedPasswordError.textContent = '';
  }

  if (email === '' || !email.includes('@')) {
    emailError.textContent = '* please enter a valid email address';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  if (phoneNumber === '') {
    phoneError.textContent = '* please enter a valid phone number';
    isValid = false;
  } else if (
    !phoneNumber.match(
      /^[\+]?[0-9]{0,3}\W?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    )
  ) {
    phoneError.textContent = '* please enter a valid phone number';
    isValid = false;
  } else {
    phoneError.textContent = '';
  }

  return isValid; // return the overall validity of the form
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (formValidation()) {
    alert('form submitted successfully!!!');
    form.reset(); // reset the form only if all validations pass
  }
});
