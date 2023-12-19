import { showingErrorMessage } from "./showingErrorMessage.js";

export const validateExpirationYear = (element: HTMLInputElement): boolean => {
  const spanNodeYear = document.querySelector(
    ".error-message-expiration-year",
  ) as HTMLInputElement;
  const re = /\D/gi;
  const matchResult = element.value.match(re);

  const getCurrentYearLast2Digits = (): number => {
    return new Date().getFullYear() % 100;
  };

  switch (true) {
    case element.value === "":
      showingErrorMessage(spanNodeYear, "Can't be blank");
      return false;
    case matchResult !== null:
      showingErrorMessage(spanNodeYear, "Wrong format, can be only numeric");
      return false;
    case element.value.length < 2:
      showingErrorMessage(spanNodeYear, "There aren't enough characters");
      return false;
    case Number(element.value) > getCurrentYearLast2Digits():
      showingErrorMessage(spanNodeYear, "Year cannot be in future");
      return false;
    default:
      showingErrorMessage(spanNodeYear, "");
      return true;
  }
};
