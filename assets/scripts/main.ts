import { fillInformations } from "./functions/fillInformations.js";

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
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            fillInformations(
                cardHolderName,
                cardNumber,
                expDateMonth,
                expDateYear,
                cvc,
            );
        });
    }
};

handleSubmit();
