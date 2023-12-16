import { showingErrorMessage } from "./showingErrorMessage.js";

export const validateHolderName = (element: HTMLInputElement): boolean => {
    const spanNode = document.querySelector(
        ".error-message-card-holder-name",
    ) as HTMLInputElement;

    if (element.value === "") {
        showingErrorMessage(spanNode, "Can't be blank", "#FF5252");
        return false;
    } else {
        showingErrorMessage(spanNode, "", "#FF5252");
        return true;
    }
};
