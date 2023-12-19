import { resetNodesAfterSubmit } from "./resetNodesAfterSubmit.js";

export const toggleFormToMessage = (): void => {
  const form = document.querySelector("form");
  const messageThankYou = document.querySelector(".message-thank-you");

  if (form && messageThankYou) {
    form.classList.add("disapear");
    messageThankYou.classList.remove("disapear");

    setTimeout(() => {
      messageThankYou.classList.add("disapear");
      form.classList.remove("disapear");
      resetNodesAfterSubmit()
    }, 6000);
  }
};
