export const resetNodesAfterSubmit = (): void => {
  const displayedCardHolderName = document.querySelector(".card-holder-name");
  const displayedCardNumber = document.querySelector(".card-number");
  const displayedExpirationMonth = document.querySelector(
    ".expiration-date-month",
  );
  const displayedExpirationYear = document.querySelector(
    ".expiration-date-year",
  );
  const displayedCodeCVC = document.querySelector(".card-code-cvc");
  const form = document.querySelector("form");

  displayedCardHolderName.textContent = "JANE APPLESEED";
  displayedCardNumber.textContent = "0000 0000 0000 0000";
  displayedExpirationMonth.textContent = "00";
  displayedExpirationYear.textContent = "00";
  displayedCodeCVC.textContent = "000";
  form.reset();
};
