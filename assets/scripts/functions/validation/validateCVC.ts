import { showingErrorMessage } from "./showingErrorMessage.js";

export const validateCVC = (element: HTMLInputElement): boolean => {
    const spanNode = document.querySelector(
        ".error-message-code-cvc",
    ) as HTMLInputElement;
    const re = /\D/gi;

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
    } else if (element.value.length < 3) {
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
