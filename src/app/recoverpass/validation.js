// validation.js

export function validatePassword(password) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\|,.<>/?]).{6,}$/;

  if (!regex.test(password)) {
    return false;
  }

  return true;
}
