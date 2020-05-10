// Class Deposit creates an object based on the entered data.

class Deposit {
  constructor() {
    this.initialAmount = document.getElementById('initial-amount-input').value;
    this.topUp = document.getElementById('top-up-input').value;
    this.currency = document.getElementById('currency-input').value.toLowerCase();
    this.months = document.getElementById('months-input').value;
  }
}

// Class Calculator gets data from our data.js file, filters it to get best options for user and calculates final amount.

class Calculator {
  constructor(array) {
    this.array = array;
  }

  getBestOption(object) {

    let initialFilter = this.array.filter(function (item) {
      return (
        item.currency.toLowerCase() === object.currency
        && item.sumMin <= object.initialAmount
        && (item.sumMax >= object.initialAmount || item.sumMax === null)
        && item.termMin <= object.months
        && item.termMax >= object.months
      )
    })

    let filteredBanks = initialFilter.filter(function (item) {
      if (+object.topUp > 0) {
        return item.canDeposit === true;
      } else if (+object.topUp === 0) {
        return true;
      }
    });

    let bestOptions = [];
    let maxRate = 0;

    for (let i of filteredBanks) {
      let selectBestOptions = filteredBanks.reduce((previous, current) => (previous.incomeType > current.incomeType) ? previous : current);
      if (selectBestOptions.incomeType >= maxRate) {
        bestOptions.push(selectBestOptions);
        maxRate = selectBestOptions.incomeType;
      }
      filteredBanks.splice(filteredBanks.indexOf(selectBestOptions), 1);
    }
    return bestOptions;
  }

  toCalculate(object, array) {
    let results = [];
    let amount = +object.initialAmount;
    let topUp = +object.topUp;
    let months = +object.months;
    for (let i = 0; i < array.length; i++) {
      let rate = +array[i].incomeType;
      for (let i = 0; i < months; i++) {
        amount += (amount * (rate / 100 / 12)) + topUp;
      }
      amount = Math.round(amount);
      amount -= topUp;
      results.push(amount);
      amount = +object.initialAmount;
    }
    return results;
  }
}

// Class Checker validates input fields:

class Checker {
  constructor(object) {
    this.initialAmount = object.initialAmount;
    this.topUp = object.topUp;
    this.currency = object.currency;
    this.months = object.months;
  }

  toCheck() {
    let errorText = document.getElementById('error-text');
    if (+this.initialAmount <= 0 || this.initialAmount === '') {
      errorText.innerHTML = '<span class="error-logo">i</span> Вы не правильно ввели "Начальную сумму вклада"!';
      alert('Начальную сумму вклада введен неправильно');
      console.warn('Начальную сумму вклада введен неправильно');
      return false;
    }
    if (+this.topUp < 0 || this.topUp === '') {
      errorText.innerHTML = '<span class="error-logo">i</span> Вы не правильно ввели "Сумму ежемесячного пополнения"!';
      alert('Сумму ежемесячного пополнени введен неправильно')
      console.warn('Сумму ежемесячного пополнени введен неправильно');
      return false;
    }
    if (+this.months <= 0 || this.months === '') {
      errorText.innerHTML = '<span class="error-logo">i</span> Вы не правильно ввели "Срок вклада"!';
      alert('Срок вклада введен неправильно');
      console.warn('Срок вклада введен неправильно');
      return false;
    }
    if (this.currency === '' || this.currency !== 'rub' && this.currency !== 'usd') {
      errorText.innerHTML = '<span class="error-logo">i</span> Валюта может выбран только RUB или USD!';
      alert('Валюта введен неправильно');
      console.warn('Валюта введен неправильно');
      return false;
    }
    errorText.innerHTML = '';
    return true;
  }
}

// Class Applicaiton runs other classes when the button on page clicked.

class Application {
  constructor() {
    this.app = document.getElementById('calculate-button').addEventListener('click', this.getFinalResultsOfInvestment);
  }

  getFinalResultsOfInvestment() {
    let createdDeposit = new Deposit();
    let validator = new Checker(createdDeposit);
    if (validator.toCheck()) {
      let arrayToCalculate = new Calculator(bankProducts);
      let theBestOption = arrayToCalculate.getBestOption(createdDeposit);
      let finalResults = arrayToCalculate.toCalculate(createdDeposit, theBestOption);

      let table = '';
      table += '<tr><th>Название банка</th><th>Вклад</th><th>Процент</th><th>Итогoвая сумма</th></tr>';

      for (let i = 0; i < theBestOption.length; i++) {
        table += '<tr style="background-color: rgba(255, 255, 255, 0.8); color: rgb(14, 21, 41); font-size: 12px">';
        table += '<td style="width: 30%">' + theBestOption[i].bankName + '</td>';
        table += '<td style="width: 30%">' + theBestOption[i].investName + '</td>';
        table += '<td style="text-align: center; width: 10%">' + theBestOption[i].incomeType + '</td>';
        table += '<td style="text-align: center; width: 30%">' + finalResults[i] + ' ' + createdDeposit.currency.toUpperCase() + '</td>';
        table += '</tr>';
      }

      if (theBestOption.length === 0) {
        table = '<td style="width: 10%; text-align: center">Нет подходящих вариантов</td>';
      }

      document.getElementById('table').innerHTML = table;
      document.getElementById('table').style.display = 'block';

      return finalResults;
    } else {
      return NaN;
    }
  }
}

new Application();