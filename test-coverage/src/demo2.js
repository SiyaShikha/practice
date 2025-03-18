export const isEven = (num) => {
  return num % 2 === 0;
};

export const isOdd = (num) => {
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
};
