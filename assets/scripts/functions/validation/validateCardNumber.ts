import { showingErrorMessage } from "./showingErrorMessage.js";

export const validateCardNumber = (element: HTMLInputElement): boolean => {
    const spanNode = document.querySelector(
        ".errorMessageNumber",
    ) as HTMLInputElement;
    const re = /\D/;

    if (element.value === "") {
        showingErrorMessage(spanNode, "Can't be blank", "#FF5252");
        return false;
    }

    if (element.value.match(re)) {
        showingErrorMessage(
            spanNode,
            "Wrong format, can be only numeric",
            "#FF5252",
        );
        return false;
    }

    if (element.value.length < 16) {
        showingErrorMessage(
            spanNode,
            "There aren't enough characters",
            "#FF5252",
        );
        return false;
    }

    return true;
};
