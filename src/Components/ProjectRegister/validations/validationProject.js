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

export const targetAmount = (targetAmount) => {
  // Add your implementation here
};

export const minAmount = (minAmount) => {
  // Add your implementation here
};

export const maxAmount = (maxAmount) => {
  // Add your implementation here
};

export const description = (text) => {
  const maxLength = 800;
  if (text.length > maxLength) {
    throw new Error("The description can't be longer than 800 characters.");
  }

  return text;
};

export const addPhoto = (photos) => {
  if (!Array.isArray(photos)) {
    throw new Error("At least one photo must be add.");
  }

  return photos;
};
