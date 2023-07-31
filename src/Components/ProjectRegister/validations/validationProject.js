export const validateBusinessName = (name) => {
  const minLength = 3;

  if (name.length < minLength) {
    throw new Error("The name have to be at least 3 characters long.");
  }

  return name;
};

export const startDate = (date) => {
  const dateObj = new Date(date);
  const currentDate = new Date();
  return dateObj instanceof Date && !isNaN(dateObj) && dateObj < currentDate;
};

export const targetAmount = (targetAmount) => {};

export const minAmount = (minAmount) => {};

export const maxAmount = (maxAmount) => {};

export const description = (description) => {
  const maxLength = 200;

  if (typeof description !== "string") {
    throw new Error("La descripción debe ser una cadena de texto.");
  }

  if (description.length > maxLength) {
    throw new Error("La descripción no puede tener más de 200 caracteres.");
  }

  return description;
};

export const addPhoto = (photos) => {};
