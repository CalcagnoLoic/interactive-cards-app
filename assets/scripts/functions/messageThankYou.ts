export const messageThankYou = (): void => {
    const form = document.querySelector("form");
    const messageTY = document.querySelector(".message-thank-you");

    if (form && messageTY) {
        form.classList.add("disapear");
        messageTY.classList.remove("disapear");

        setTimeout(() => {
            messageTY.classList.add("disapear");
            form.classList.remove("disapear");
        }, 3000)
    }
};
