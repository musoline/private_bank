import { CalculateUtil } from "../Utils/CalculateUtil";

export default class FormComponent {
  public static createForm(main: HTMLElement) {
    const form = document.createElement("form");

    form.setAttribute("autocomplete", "off");

    const loanAmount = FormComponent.createInput(
      "loan",
      "loan",
      "შეიყვანეთ სესხის თანხა"
    );
    const anualPercent = FormComponent.createInput(
      "anualPercent",
      "anualPercent",
      "შეიყვანეთ წლიური პროცენტი"
    );
    const loanPeriod = FormComponent.createInput(
      "loanPeriod",
      "loanPeriod",
      "შეიყვანეთ სესხის ვადა თვეებში"
    );
    const submitButton = FormComponent.createFormSubmit();

    const resultCard = document.createElement("div");
    resultCard.classList.add("card");
    resultCard.classList.add("onHold");

    const event = new Event("formSubmition");

    submitButton.addEventListener("click", (ev: MouseEvent) => {
      ev.preventDefault();

      form.dispatchEvent(event);
    });
    form.append(loanAmount, anualPercent, loanPeriod, submitButton);

    form.addEventListener("formSubmition", () => {
      if (
        loanAmount.value.length <= 0 ||
        anualPercent.value.length <= 0 ||
        loanPeriod.value.length <= 0
      ) {
        resultCard.innerHTML = "შეიყვანეთ მონაცემები";
        return;
      }

      resultCard.innerHTML = `${loanAmount.value} გამოიტანა, ${
        anualPercent.value
      }% ში ${
        loanPeriod.value
      } თვით და თვეში უნდა იხადოს ${CalculateUtil.monthly(
        +loanAmount.value,
        +anualPercent.value,
        +loanPeriod.value
      ).toFixed(2)} ლარი`;
    });
    main.append(form, resultCard);
  }

  public static createInput(
    attrName: string,
    attrId: string,
    attrPlaceHolder: string
  ) {
    const inputElement = document.createElement("input");
    inputElement.setAttribute("name", attrName);
    inputElement.setAttribute("id", attrId);
    inputElement.setAttribute("placeholder", attrPlaceHolder);
    return inputElement;
  }

  public static createFormSubmit() {
    const formSubmit = document.createElement("button");
    formSubmit.classList.add("btn");
    formSubmit.innerHTML = "გამოთვალე";

    return formSubmit;
  }
}
