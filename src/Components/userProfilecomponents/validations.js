/* name: user.name,
        email: user.email,
        rol: user.rol,
        birthdate: user.birthdate,
        phone: user.phone,
        address: user.address, */

function isAdult(birthdate) {
  const currentDate = new Date();
  const birthDate = new Date(birthdate);
  const timeDiff = currentDate.getTime() - birthDate.getTime();
  const age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
  return age >= 18;
}

const validation = (userData) => {
  const errors = {};
  if (userData.name && !/^[A-Z][a-zA-Z ]+$/.test(userData.name))
    errors.name = "Invalid name";
  if (userData.email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.email))
    errors.email = "Invalid email format";
  if (userData.birthdate && !isAdult(userData.birthdate))
    errors.birthdate = "Must be 18 years or older";
  if (
    userData.phone &&
    !/^\+?\d{1,3}?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
      userData.phone
    )
  )
    errors.phone = "Please enter a valid phone number";
  return errors;
};

export default validation;
