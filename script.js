// CLASSES:

class Application {
    constructor() {
        this.initialAmountInput = document.getElementById("initial-amount-input");
        this.topUpInput = document.getElementById("top-up-input");
        this.currencyInput = document.getElementById("currency-input");
        this.daysInput = document.getElementById("days-input");
        this.calculateButton = document.getElementById("calculate-button");
        this.errorText = document.getElementById("error-text");
        this.calculateButton.addEventListener("click", this.fillDeposit);
    }
    fillDeposit() {
        if (this.toCheck(+this.initialAmountInput.value, +this.topUpInput.value, this.currencyInput.value, +this.daysInput.value)) {
            let deposit = new Deposit(+this.initialAmountInput.value, +this.topUpInput.value, this.currencyInput.value, +this.daysInput.value);
        } else {
            return console.warn('Неправильный ввод');
        }
    }
    toCheck(cv, tp, cur, d) {
        if (+this.initialAmountInput.value <= 0 || this.initialAmountInput.value === '') {
            errorText.innerHTML = '<span class="error-logo">i</span> Вы не правильно ввели "Начальную сумму вклада"!';
            console.warn('Начальную сумму вклада введен неправильно');
            return false;
        }
        if (+this.topUpInput.value < 0 || this.topUpInput.value === '') {
            errorText.innerHTML = '<span class="error-logo">i</span> Вы не правильно ввели "Сумму ежемесячного пополнения"!';
            console.warn('Сумму ежемесячного пополнени введен неправильно');
            return false;
        }
        if (+this.daysInput.value <= 0 || this.daysInput.value === '') {
            errorText.innerHTML = '<span class="error-logo">i</span> Вы не правильно ввели "Срок вклада"!';
            console.warn('Срок вклада введен неправильно');
            return false;
        }
        if (this.currencyInput.value === '' || this.currencyInput.value !== 'rub' && this.currencyInput.value !== 'usd') {
            errorText.innerHTML = '<span class="error-logo">i</span> Валюта может выбран только RUB или USD!';
            console.warn('Валюта введен неправильно');
            return false;
        }
        errorText.innerHTML = "";
        return true;
    }
}

