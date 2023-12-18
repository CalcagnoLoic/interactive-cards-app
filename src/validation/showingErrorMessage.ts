export const showingErrorMessage = (
  elem: HTMLInputElement,
  message: string,
  color: string,
) => {
  elem.innerHTML = message;
  elem.previousElementSibling.classList.remove("border-mischka");
  elem.previousElementSibling.classList.add(`border-${color}`);
};
