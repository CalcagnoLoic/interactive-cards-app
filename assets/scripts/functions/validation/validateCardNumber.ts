import { showingErrorMessage } from "./showingErrorMessage.js";

export const validateCardNumber = (element: HTMLInputElement): boolean => {
    const spanNode = document.querySelector(
        ".error-message-card-number",
    ) as HTMLInputElement;
    const re = /^(\d{0,4})\s(\d{0,4})\s(\d{0,4})\s(\d{0,4})$/;

    if (element.value === "") {
        showingErrorMessage(spanNode, "Can't be blank", "#FF5252");
        return false;
    } else if (element.value.match(re)) {
        showingErrorMessage(
            spanNode,
            "Wrong format, can be only numeric",
            "#FF5252",
        );
        return false;
    } else if (element.value.length < 16) {
        showingErrorMessage(
            spanNode,
            "There aren't enough characters",
            "#FF5252",
        );
        return false;
    } else {
        showingErrorMessage(spanNode, "", "#FF5252");
        return true;
    }
};
