import { showingErrorMessage } from "./showingErrorMessage.js";

export const validateCVC = (element: HTMLInputElement): boolean => {
  const spanNode = document.querySelector(
    ".error-message-code-cvc",
  ) as HTMLInputElement;
  const re = /\D/gi;
  const matchResult = element.value.match(re);

  switch (true) {
    case element.value === "":
      showingErrorMessage(spanNode, "Can't be blank");
      return false;
    case matchResult !== null:
      showingErrorMessage(spanNode, "Wrong format, can be only numeric");
      return false;
    case element.value.length < 3:
      showingErrorMessage(spanNode, "There aren't enough characters");
      return false;
    default:
      showingErrorMessage(spanNode, "");
      return true;
  }
};
