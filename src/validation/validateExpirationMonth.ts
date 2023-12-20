export const validateExpirationMonth = (
  expirationMonthValue: string,
): [boolean, string] => {
  const re = /\D/gi;
  const matchResult = expirationMonthValue.match(re);

  switch (true) {
    case expirationMonthValue === "":
      return [false, "Month can't be blank"];
    case matchResult !== null:
      return [false, "Wrong format, month can be only numeric"];
    case expirationMonthValue.length < 2:
      return [false, "There aren't enough characters in month"];
    case Number(expirationMonthValue) > 12 || Number(expirationMonthValue) < 1:
      return [false, "Month must be between 1 and 12"];
    default:
      return [true, ""];
  }
};
