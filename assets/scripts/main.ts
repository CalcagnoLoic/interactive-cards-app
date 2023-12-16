import { validateHolderName } from "./functions/validation/validateHolderName.js";
import { validateCardNumber } from "./functions/validation/validateCardNumber.js";
import { validateExpDate } from "./functions/validation/validateExpDate.js";
import { validateCVC } from "./functions/validation/validateCVC.js";
import { formatCardNumber } from "./functions/formatCardNumber.js";
import { messageThankYou } from "./functions/messageThankYou.js";

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
    const cardNumber = document.querySelector(
        "#card-number",
    ) as HTMLInputElement;
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
    const cardNumber = document.querySelector(
        "#card-number",
    ) as HTMLInputElement;
    const expirationDateMonth = document.querySelector(
        "#expiration-date-month",
    ) as HTMLInputElement;
    const expirationDateYear = document.querySelector(
        "#expiration-date-year",
    ) as HTMLInputElement;
    const codeCVC = document.querySelector("#code-cvc") as HTMLInputElement;

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const valideCardName = validateHolderName(cardHolderName);
            const valideNumber = validateCardNumber(cardNumber);
            const valideExpMonth = validateExpDate(expirationDateMonth);
            const valideExpYear = validateExpDate(expirationDateYear);
            const valideCVC = validateCVC(codeCVC);

            if (
                valideCardName &&
                valideNumber &&
                valideExpMonth &&
                valideExpYear &&
                valideCVC
            ) {
                messageThankYou();
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
