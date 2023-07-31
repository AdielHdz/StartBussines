/* export const validateName = (name) => {
  // Utiliza una expresión regular para validar el nombre
  const nameRegex = /^[A-Za-z\s]+$/;
  return nameRegex.test(name) && name !== "";
}


export const validateEmail = (email) => {
    // Utiliza una expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  //CONFIRMAR CORREO
  
  export const validateDate = (date) => {
    // Validar si la fecha es una fecha válida
    const dateObj = new Date(date);
    const currentDate = new Date();
    return dateObj instanceof Date && !isNaN(dateObj) && dateObj < currentDate;
  };
  
  export const validateAge = (date) => {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 18;
  };
  
  //cambiar esta
  //caracter especial 
  export const validatePassword = (password) => {
    const errors = [];
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
  
    if (password.length < 6) {
      errors.push("Password must be at least 6 characters");
    }
    if (!uppercaseRegex.test(password)) {
      errors.push("Password must contain at least one uppercase letter");
    }
    if (!lowercaseRegex.test(password)) {
      errors.push("Password must contain at least one lowercase letter");
    }
    if (!numberRegex.test(password)) {
      errors.push("Password must contain at least one number");
    }
    if (!specialCharacterRegex.test(password)) {
      errors.push("Password must contain at least one special character");
    }
  
    return errors.join(", ");
  };
  
   */

function isAdult(birthdate) {
  const currentDate = new Date();
  const birthDate = new Date(birthdate);
  const timeDiff = currentDate.getTime() - birthDate.getTime();
  const age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
  return age >= 18;
}

const validation = (form) => {
  const errors = {};
  if (form.fullName && !/^[A-Z][a-zA-Z ]+$/.test(form.fullName))
    errors.fullName = "Invalid name";
  if (form.email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
    errors.email = "Invalid email format";
  if (form.birthdate && !isAdult(form.birthdate))
    errors.birthdate = "Must be 18 years or older";
  if (
    form.password &&
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password)
  )
    errors.password =
      "Password must contain at least 8 characters, one lowercase letter, one uppercase letter, and one digit.";

  if (form.confirmPassword && form.password !== form.confirmPassword)
    errors.confirmPassword = "Passwords do not match.";
  return errors;
};

export default validation;
