export const validateName = (name) => {
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
    // Validar que la contraseña contenga al menos una mayúscula, una minúscula y un número
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (password.length < 6) {
      return "Password must be at least 6 characters";
  } else if (!uppercaseRegex.test(password)) {
      return "Password must contain at least one uppercase letter";
  } else if (!lowercaseRegex.test(password)) {
      return "Password must contain at least one lowercase letter";
  } else if (!numberRegex.test(password)) {
      return "Password must contain at least one number";
  } else if (!specialCharacterRegex.test(password)) {
      return "Password must contain at least one special character";
  }

  return "";
};
  