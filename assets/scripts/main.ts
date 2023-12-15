import { fillInformations } from "./functions/fillInformations.js";
import { validateHolderName } from "./functions/validation/validateHolderName.js";
import { validateCardNumber } from "./functions/validation/validateCardNumber.js";
import { validateExpDate } from "./functions/validation/validateExpDate.js";
import { validateCVC } from "./functions/validation/validateCVC.js";
import { formatCardNumber } from "./functions/formatCardNumber.js";

const handleSubmit = () => {
    const form = document.querySelector("form");
    const cardHolderName = document.querySelector(
        "#cardholder",
    ) as HTMLInputElement;
    const cardNumber = document.querySelector(
        "#cardnumber",
    ) as HTMLInputElement;
    const expDateMonth = document.querySelector(
        "#expdateMonth",
    ) as HTMLInputElement;
    const expDateYear = document.querySelector(
        "#expdateYear",
    ) as HTMLInputElement;
    const cvc = document.querySelector("#cvc") as HTMLInputElement;

    if (form) {
        cardNumber.addEventListener("keyup", () => {
            formatCardNumber(cardNumber.value);
        });

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const valideCardName = validateHolderName(cardHolderName);
            const valideNumber = validateCardNumber(cardNumber);
            const valideExpMonth = validateExpDate(expDateMonth);
            const valideExpYear = validateExpDate(expDateYear);
            const valideCVC = validateCVC(cvc);

            if (
                valideCardName &&
                valideNumber &&
                valideExpMonth &&
                valideExpYear &&
                valideCVC
            ) {
                fillInformations(
                    cardHolderName,
                    cardNumber,
                    expDateMonth,
                    expDateYear,
                    cvc,
                );
            }
        });
    }
};

handleSubmit();
