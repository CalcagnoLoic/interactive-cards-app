import { showingErrorMessage } from "./showingErrorMessage.js";

export const validateCVC = (element: HTMLInputElement): boolean => {
  const spanNode = document.querySelector(
    ".error-message-code-cvc",
  ) as HTMLInputElement;
  const re = /\D/gi;
  const matchResult = element.value.match(re);

  switch (true) {
    case element.value === "":
      showingErrorMessage(spanNode, "Can't be blank", "#FF5252");
      return false;
    case matchResult !== null:
      showingErrorMessage(
        spanNode,
        "Wrong format, can be only numeric",
        "#FF5252",
      );
      return false;
    case element.value.length < 3:
      showingErrorMessage(
        spanNode,
        "There aren't enough characters",
        "#FF5252",
      );
      return false;
    default:
      showingErrorMessage(spanNode, "", "#FF5252");
      return true;
  }
};
