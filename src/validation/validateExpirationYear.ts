export const validateExpirationYear = (
  expirationYearValue: string,
): [boolean, string] => {
  const re = /\D/gi;
  const matchResult = expirationYearValue.match(re);

  switch (true) {
    case expirationYearValue === "":
      return [false, "Year can't be blank"];
    case matchResult !== null:
      return [false, "Wrong format, year can be only numeric"];
    case expirationYearValue.length < 2:
      return [false, "There aren't enough characters in year"];
    default:
      return [true, ""];
  }
};
