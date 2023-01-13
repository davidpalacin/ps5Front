export const validateForm = (formValues) => {

  const errors = {};
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if(!formValues.email){
    errors.email = 'Email is required';
  } else if (!emailPattern.test(formValues.email)){
    errors.email = 'Invalid email';
  }

  if (!formValues.password) {
    errors.password = "Password is required";
  } else if (formValues.password.length < 6) {
    errors.password = "Short password";
  }

  return errors;
}