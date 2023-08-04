export const formatCurrency = (valueInputCurrency) => {
    return valueInputCurrency.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  };
  
  export const capitalizeFirstLetter = (valueInputFirstLetter) => {
    return valueInputFirstLetter.charAt(0).toUpperCase() + valueInputFirstLetter.slice(1);
  };
    
  export const formatAllLetter = (valueInputAllLetter) => {
    return valueInputAllLetter
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(' ');
  };
  