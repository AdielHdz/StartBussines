const validation = (form) => {
  const errors = {};
  if (form.email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
    errors.email = "Invalid email format";
  if (
    form.password &&
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password)
  )
    errors.password = "Incorrect password";
  return errors;
};
export default validation;
