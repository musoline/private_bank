export default class FormComponent {
    public static createForm(main: HTMLElement) {
        const form = document.createElement("form");

        const loanAmount = FormComponent.createInput("loan", "loan", "Enter Loan Amount");
        const anualPercent = FormComponent.createInput("anualPercent", "anualPercent", "Enter Anual Percent");
        const loanPeriod = FormComponent.createInput("loanPeriod", "loanPeriod", "Enter Loan Period In Month");
        const submitButton = FormComponent.createFormSubmit()

        const event = new Event("formSubmition");


        submitButton.addEventListener("click", (ev: MouseEvent) => {
            ev.preventDefault();
            form.dispatchEvent(event);
        })
        form.append(loanAmount, anualPercent, loanPeriod, submitButton);



        form.addEventListener("formSubmition", () => {

            console.log(`${loanAmount.value} გამოიტანა, ${anualPercent.value}% ში ${loanPeriod.value} თვით და თვეში უნდა იხადოს ${FormComponent.calculate(+loanAmount.value, +anualPercent.value, 12)} ლარი`)


        })
        main.appendChild(form)
    }


    public static calculate(a: number, r: number, n: number = 12) {
        return a * (((r / 100 / 12) * Math.pow(1 + (r / 100 / 12), n)) / (Math.pow(1 + (r / 100 / 12), n) - 1))
    }

    public static createInput(attrName: string, attrId: string, attrPlaceHolder: string) {
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