export const validateCVC = (cvcValue: string): [boolean, string] => {
  const re = /\D/gi;
  const matchResult = cvcValue.match(re);

  switch (true) {
    case cvcValue === "":
      return [false, "Can't be blank"];
    case matchResult !== null:
      return [false, "Wrong format, can be only numeric"];
    case cvcValue.length < 3:
      return [false, "There aren't enough characters"];
    default:
      return [true, ""];
  }
};
