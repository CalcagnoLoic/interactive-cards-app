import { showingErrorMessage } from "./showingErrorMessage.js";

export const validateHolderName = (element: HTMLInputElement): boolean => {
    const spanNode = document.querySelector(
        ".errorMessageHolder",
    ) as HTMLInputElement;

    if (element.value === "") {
        showingErrorMessage(spanNode, "Can't be blank", "#FF5252");
        return false;
    }

    return true;
};
