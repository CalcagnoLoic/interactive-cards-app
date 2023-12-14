export const fillInformations = (
    cardHolderName: HTMLInputElement,
    cardnumber: HTMLInputElement,
    expm: HTMLInputElement,
    expy: HTMLInputElement,
    cvc: HTMLInputElement,
): void => {
    const cardName = document.querySelector(".cardname");
    const cardNumber = document.querySelector(".cardnumber");
    const expM = document.querySelector(".expM");
    const expY = document.querySelector(".expY");
    const cardCvc = document.querySelector(".card-cvc");

    cardName.innerHTML = cardHolderName.value;
    cardNumber.innerHTML = cardnumber.value;
    expM.innerHTML = expm.value;
    expY.innerHTML = expy.value;
    cardCvc.innerHTML = cvc.value;
};
