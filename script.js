let initialAmountInput = document.getElementById("initial-amount-input");
let topUpInput = document.getElementById("top-up-input");
let interestRateInput = document.getElementById("interest-rate-input");
let daysInput = document.getElementById("days-input");
let calculateButton = document.getElementById("calculate-button");
let errorText = document.getElementById("error-text");

calculateButton.addEventListener("click", getResult);

function getResult() {
    cv = initialAmountInput.value;
    tp = topUpInput.value;
    r = interestRateInput.value;
    d = daysInput.value;
    if (toCheck(cv, tp, r, d)) {
        alert(toCalculate(cv, tp, r, d));
    } else {
        return NaN;
    }
}

function toCheck(cv, tp, r, d) {
    if (cv <= 0 || cv === '') {
        errorText.innerHTML = '<span class="error-logo">i</span> Вы не правильно ввели "Начальную сумму вклада"!';
        errorText.className = "";
        console.warn('Начальную сумму вклада введен неправильно');
        return NaN;
    }
    if (tp < 0 || tp === '') {
        errorText.innerHTML = '<span class="error-logo">i</span> Вы не правильно ввели "Сумму ежемесячного пополнения"!';
        errorText.className = '';
        console.warn('Сумму ежемесячного пополнени введен неправильно');
        return NaN;
    }
    if (r <= 0 || r > 100 || r === '') {
        errorText.innerHTML = '<span class="error-logo">i</span> Процентная ставка может быть только от 0 до 100!';
        errorText.className = '';
        console.warn('Процентная ставка введен неправильно');
        return NaN;
    }
    if (d <= 0 || d === '') {
        errorText.innerHTML = '<span class="error-logo">i</span> Вы не правильно ввели "Срок вклада"!';
        errorText.className = '';
        console.warn('Срок вклада введен неправильно');
        return NaN;
    }
    errorText.className = "input-error";
    return true;
}

function toCalculate(cv, tp, r, d) {
    if (d < 30) {
        return "Future value of deposit will be: " + +cv;
    } else {
        let months = Math.trunc(d / 30);
        for (i = 1; i <= months; i++) {
            cv = +cv + +tp + (+cv * +r) / 1200;
        }
    }
    cv -= +tp;
    return "Future value of deposit will be: " + +cv.toFixed(2);
}

