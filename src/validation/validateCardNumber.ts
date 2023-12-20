export const validateCardNumber = (cardNumberValue: string): [boolean, string] => {
  const re = /[a-z]/gi;
  const matchResult = cardNumberValue.match(re);

  switch (true) {
    case cardNumberValue === "":
      return [false, "Can't be blank"]
    case matchResult !== null:
      return [false, "Wrong format, can be only numeric"]
    case cardNumberValue.length < 16:
      return [false, "There aren't enough characters"]
    default:
      return [true, ""]
  }
};
