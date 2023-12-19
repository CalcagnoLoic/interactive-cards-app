import { showingErrorMessage } from "./showingErrorMessage.js";

export const validateExpirationMonth = (element: HTMLInputElement): boolean => {
  const spanNodeMonth = document.querySelector(
    ".error-message-expiration-month",
  ) as HTMLInputElement;
  const re = /\D/gi;
  const matchResult = element.value.match(re);

  switch (true) {
    case element.value === "":
      showingErrorMessage(spanNodeMonth, "Month an't be blank");
      return false;
    case matchResult !== null:
      showingErrorMessage(
        spanNodeMonth,
        "Wrong format, month can be only numeric",
      );
      return false;
    case element.value.length < 2:
      showingErrorMessage(
        spanNodeMonth,
        "There aren't enough characters in month",
      );
      return false;
    case Number(element.value) > 12 || Number(element.value) < 1:
      showingErrorMessage(spanNodeMonth, "Month must be between 1 and 12");
      return false;
    default:
      showingErrorMessage(spanNodeMonth, "");
      return true;
  }
};
