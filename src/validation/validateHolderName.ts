export const validateHolderName = (
  holderNameValue: string,
): [boolean, string] => {
  if (holderNameValue === "") {
    return [false, "Can't be blank"];
  } else {
    return [true, ""];
  }
};
