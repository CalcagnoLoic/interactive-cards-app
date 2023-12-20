import { validateHolderName } from "./validation/validateHolderName.js";
import { validateCardNumber } from "./validation/validateCardNumber.js";
import { validateExpirationMonth } from "./validation/validateExpirationMonth.js";
import { validateExpirationYear } from "./validation/validateExpirationYear.js";
import { validateCVC } from "./validation/validateCVC.js";
import { formatCardNumber } from "./utils/formatCardNumber.js";
import { toggleFormToMessage } from "./utils/toggleFormToMessage.js";
import { showingErrorMessage } from "./validation/showingErrorMessage.js";

const handleKeyupCardHolderName = () => {
  const cardHolderName = document.querySelector(
    "#card-holder-name",
  ) as HTMLInputElement;
  const displayedCardHolderName = document.querySelector(".card-holder-name");

  cardHolderName.addEventListener("keyup", () => {
    displayedCardHolderName.textContent = cardHolderName.value;
  });
};

const handleKeyupCardNumber = () => {
  const cardNumber = document.querySelector("#card-number") as HTMLInputElement;
  const displayedCardNumber = document.querySelector(".card-number");

  cardNumber.addEventListener("keyup", () => {
    const formattedCardNumber = formatCardNumber(cardNumber.value);
    cardNumber.value = formattedCardNumber;
    displayedCardNumber.textContent = formattedCardNumber;
  });
};

const handleKeyupExpirationMonth = () => {
  const expirationDateMonth = document.querySelector(
    "#expiration-date-month",
  ) as HTMLInputElement;
  const displayedExpirationMonth = document.querySelector(
    ".expiration-date-month",
  );

  expirationDateMonth.addEventListener("keyup", () => {
    displayedExpirationMonth.textContent = expirationDateMonth.value;
  });
};

const handleKeyupExpirationYear = () => {
  const expirationDateYear = document.querySelector(
    "#expiration-date-year",
  ) as HTMLInputElement;
  const displayedExpirationYear = document.querySelector(
    ".expiration-date-year",
  );

  expirationDateYear.addEventListener("keyup", () => {
    displayedExpirationYear.textContent = expirationDateYear.value;
  });
};

const handleKeyupCodeCVC = () => {
  const codeCVC = document.querySelector("#code-cvc") as HTMLInputElement;
  const displayedCodeCVC = document.querySelector(".card-code-cvc");

  codeCVC.addEventListener("keyup", () => {
    displayedCodeCVC.textContent = codeCVC.value;
  });
};

const handleSubmit = () => {
  const form = document.querySelector("form");
  const cardHolderName = document.querySelector(
    "#card-holder-name",
  ) as HTMLInputElement;
  const spanNodeHolderName = document.querySelector(
    ".error-message-card-holder-name",
  );
  const cardNumber = document.querySelector("#card-number") as HTMLInputElement;
  const spanNodeCardNumber = document.querySelector(
    ".error-message-card-number",
  );
  const expirationDateMonth = document.querySelector(
    "#expiration-date-month",
  ) as HTMLInputElement;
  const spanNodeMonth = document.querySelector(
    ".error-message-expiration-month",
  );
  const expirationDateYear = document.querySelector(
    "#expiration-date-year",
  ) as HTMLInputElement;
  const spanNodeYear = document.querySelector(".error-message-expiration-year");
  const codeCVC = document.querySelector("#code-cvc") as HTMLInputElement;
  const spanNodeCVC = document.querySelector(".error-message-code-cvc");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const [isValidCardName, errorCardNameMessage] = validateHolderName(
        cardHolderName.value,
      );
      const [isValidNumber, errorCardNumberMessage] = validateCardNumber(
        cardNumber.value,
      );
      const [isValidExpMonth, errorExpirationMonthMessage] =
        validateExpirationMonth(expirationDateMonth.value);
      const [isValidExpYear, errorExpirationYearMessage] =
        validateExpirationYear(expirationDateYear.value);
      const [isValidCVC, errorCvcMessage] = validateCVC(codeCVC.value);

      showingErrorMessage(spanNodeHolderName, errorCardNameMessage);
      showingErrorMessage(spanNodeCardNumber, errorCardNumberMessage);
      showingErrorMessage(spanNodeMonth, errorExpirationMonthMessage);
      showingErrorMessage(spanNodeYear, errorExpirationYearMessage);
      showingErrorMessage(spanNodeCVC, errorCvcMessage);

      if (
        isValidCardName &&
        isValidNumber &&
        isValidExpMonth &&
        isValidExpYear &&
        isValidCVC
      ) {
        toggleFormToMessage();
      }
    });
  }
};

const main = () => {
  handleKeyupCardNumber();
  handleKeyupCardHolderName();
  handleKeyupExpirationMonth();
  handleKeyupExpirationYear();
  handleKeyupCodeCVC();
  handleSubmit();
};

main();
