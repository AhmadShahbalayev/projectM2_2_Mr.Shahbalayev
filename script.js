// DATABASE:

let bankProducts = [
    { "bankName": "Совкомбанк", "investName": "Удобный (в долларах)", "currency": "USD", "incomeType": 1, "sumMin": 500, "sumMax": null, "termMin": 3, "termMax": 6, "canDeposit": true },
    { "bankName": "Паша Банк", "investName": "Онлайн (в долларах)", "currency": "USD", "incomeType": 1, "sumMin": 500, "sumMax": null, "termMin": 3, "termMax": 6, "canDeposit": true },
    { "bankName": "Газпромбанк", "investName": "Ваш успех", "currency": "RUB", "incomeType": 6.22, "sumMin": 50000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": false },
    { "bankName": "Кредит Европа Банк", "investName": "Оптимальный на 2 года", "currency": "RUB", "incomeType": 6.45, "sumMin": 100000, "sumMax": null, "termMin": 24, "termMax": 24, "canDeposit": false },
    { "bankName": "Банк Зенит", "investName": "Праздничный 500+", "currency": "RUB", "incomeType": 6, "sumMin": 30000, "sumMax": null, "termMin": 17, "termMax": 17, "canDeposit": false },
    { "bankName": "Еврофинанс Моснарбанк", "investName": "Классический", "currency": "RUB", "incomeType": 6.95, "sumMin": 30000, "sumMax": null, "termMin": 12, "termMax": 24, "canDeposit": false },
    { "bankName": "Джей энд Ти Банк", "investName": "Магнус-Онлайн", "currency": "RUB", "incomeType": 6.8, "sumMin": 100000, "sumMax": null, "termMin": 6, "termMax": 6, "canDeposit": false },
    { "bankName": "МТС Банк", "investName": "В вашу пользу", "currency": "RUB", "incomeType": 6.75, "sumMin": 50000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Эс-Би-Ай Банк", "investName": "Свои правила Онлайн", "currency": "RUB", "incomeType": 6.7, "sumMin": 30000, "sumMax": 30000000, "termMin": 24, "termMax": 24, "canDeposit": false },
    { "bankName": "Банк Уралсиб", "investName": "Прогноз отличный", "currency": "RUB", "incomeType": 6.7, "sumMin": 100000, "sumMax": null, "termMin": 37, "termMax": 37, "canDeposit": false },
    { "bankName": "Инвестторгбанк", "investName": "ИТБ-Постоянный доход", "currency": "RUB", "incomeType": 6.6, "sumMin": 50000, "sumMax": null, "termMin": 37, "termMax": 37, "canDeposit": false },
    { "bankName": "Транскапиталбанк", "investName": "ТКБ.Постоянный доход", "currency": "RUB", "incomeType": 6.6, "sumMin": 50000, "sumMax": null, "termMin": 37, "termMax": 37, "canDeposit": false },
    { "bankName": "Совкомбанк", "investName": "Зимний праздник с Халвой", "currency": "RUB", "incomeType": 5.6, "sumMin": 50000, "sumMax": null, "termMin": 2, "termMax": 2, "canDeposit": true },
    { "bankName": "Агророс", "investName": "Медовый месяц", "currency": "RUB", "incomeType": 5.51, "sumMin": 20000, "sumMax": null, "termMin": 1, "termMax": 1, "canDeposit": true },
    { "bankName": "Росдорбанк", "investName": "Онлайн-1", "currency": "RUB", "incomeType": 5.1, "sumMin": 100000, "sumMax": 150000000, "termMin": 1, "termMax": 1, "canDeposit": true },
    { "bankName": "Национальный Стандарт", "investName": "Сберегательный стандарт", "currency": "RUB", "incomeType": 5.1, "sumMin": 100000, "sumMax": null, "termMin": 1, "termMax": 3, "canDeposit": true },
    { "bankName": "Россия", "investName": "Морозные узоры", "currency": "RUB", "incomeType": 5, "sumMin": 100000, "sumMax": null, "termMin": 1, "termMax": 1, "canDeposit": true },
    { "bankName": "Кузнецкий Мост", "investName": "Накопительный", "currency": "RUB", "incomeType": 4.85, "sumMin": 50000, "sumMax": null, "termMin": 1, "termMax": 3, "canDeposit": true },
    { "bankName": "Тексбанк", "investName": "Универсальный", "currency": "RUB", "incomeType": 4.6, "sumMin": 10000, "sumMax": null, "termMin": 1, "termMax": 1, "canDeposit": true },
    { "bankName": "Морской Банк", "investName": "Правильным курсом +", "currency": "RUB", "incomeType": 4.55, "sumMin": 100000, "sumMax": null, "termMin": 1, "termMax": 3, "canDeposit": true },
    { "bankName": "Норвик Банк", "investName": "Лаконичный", "currency": "RUB", "incomeType": 4.5, "sumMin": 500, "sumMax": 50000000, "termMin": 1, "termMax": 1, "canDeposit": true },
    { "bankName": "Промсельхозбанк", "investName": "Конструктор", "currency": "RUB", "incomeType": 4.5, "sumMin": 10000, "sumMax": null, "termMin": 1, "termMax": 3, "canDeposit": true },
    { "bankName": "Акибанк", "investName": "Онлайн", "currency": "RUB", "incomeType": 6.5, "sumMin": 1000, "sumMax": null, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Банк БКФ", "investName": "Ключевой стандарт", "currency": "RUB", "incomeType": 6.5, "sumMin": 100000, "sumMax": null, "termMin": 6, "termMax": 13, "canDeposit": true },
    { "bankName": "Экспобанк", "investName": "Специальный (в конце срока)", "currency": "RUB", "incomeType": 6.35, "sumMin": 50000, "sumMax": 10000000, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Инвестторгбанк", "investName": "ИТБ-Пополняемый", "currency": "RUB", "incomeType": 6.15, "sumMin": 50000, "sumMax": 30000000, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Транскапиталбанк", "investName": "ТКБ.Пополняемый", "currency": "RUB", "incomeType": 6.15, "sumMin": 50000, "sumMax": 30000000, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Евроазиатский Инвестиционный Банк", "investName": "Классика", "currency": "RUB", "incomeType": 6.1, "sumMin": 100000, "sumMax": null, "termMin": 6, "termMax": 12, "canDeposit": true },
    { "bankName": "Тимер Банк", "investName": "Надежный выбор", "currency": "RUB", "incomeType": 6, "sumMin": 10000, "sumMax": null, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Евразийский Банк", "investName": "TURBO MAXIMUM", "currency": "RUB", "incomeType": 6, "sumMin": 30000, "sumMax": 299999, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Таврический Банк", "investName": "Достижимый (онлайн)", "currency": "RUB", "incomeType": 6, "sumMin": 50000, "sumMax": null, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Экспобанк", "investName": "Юбилейный 25 (в конце срока)", "currency": "RUB", "incomeType": 6.5, "sumMin": 100000, "sumMax": 20000000, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Крокус-Банк", "investName": "Ежемесячный доход", "currency": "RUB", "incomeType": 6.35, "sumMin": 50000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Промсельхозбанк", "investName": "Ваш выбор", "currency": "RUB", "incomeType": 6.3, "sumMin": 10000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Нацинвестпромбанк", "investName": "Прибыльный", "currency": "RUB", "incomeType": 6.3, "sumMin": 50000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Ишбанк", "investName": "Накопительный", "currency": "RUB", "incomeType": 6.25, "sumMin": 100000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Примсоцбанк", "investName": "Новогодний чулок (333 дня)", "currency": "RUB", "incomeType": 6.2, "sumMin": 10000, "sumMax": null, "termMin": 11, "termMax": 11, "canDeposit": true },
    { "bankName": "Еврофинанс Моснарбанк", "investName": "Пополняемый", "currency": "RUB", "incomeType": 6.75, "sumMin": 1000000, "sumMax": null, "termMin": 12, "termMax": 24, "canDeposit": true },
    { "bankName": "Евроазиатский Инвестиционный Банк", "investName": "VIP", "currency": "RUB", "incomeType": 6.35, "sumMin": 1000000, "sumMax": null, "termMin": 9, "termMax": 12, "canDeposit": true },
    { "bankName": "Российская Финансовая Корпорация", "investName": "Универсальный", "currency": "RUB", "incomeType": 6, "sumMin": 5000, "sumMax": null, "termMin": 3, "termMax": 3, "canDeposit": true },
    { "bankName": "Московский Кредитный Банк", "investName": "МЕГА Онлайн", "currency": "RUB", "incomeType": 5.8, "sumMin": 1000, "sumMax": null, "termMin": 3, "termMax": 5, "canDeposit": true },
    { "bankName": "Александровский", "investName": "Черника 19/20", "currency": "RUB", "incomeType": 5.6, "sumMin": 20000, "sumMax": null, "termMin": 3, "termMax": 3, "canDeposit": true },
    { "bankName": "Финанс Бизнес Банк", "investName": "Мандариновый!", "currency": "RUB", "incomeType": 5.6, "sumMin": 50000, "sumMax": null, "termMin": 3, "termMax": 3, "canDeposit": true },
    { "bankName": "ЦентроКредит", "investName": "Доход Плюс", "currency": "USD", "incomeType": 1.15, "sumMin": 5000, "sumMax": null, "termMin": 3, "termMax": 3, "canDeposit": true },
    { "bankName": "Веста", "investName": "Веста - Копилка", "currency": "USD", "incomeType": 1, "sumMin": 10000, "sumMax": null, "termMin": 3, "termMax": 6, "canDeposit": true },
    { "bankName": "Славия", "investName": "Славный Капитал", "currency": "USD", "incomeType": 0.85, "sumMin": 5000, "sumMax": null, "termMin": 3, "termMax": 4, "canDeposit": true },
    { "bankName": "Роскосмосбанк", "investName": "Комфортный", "currency": "USD", "incomeType": 0.8, "sumMin": 500, "sumMax": null, "termMin": 3, "termMax": 6, "canDeposit": true },
    { "bankName": "ФорБанк", "investName": "Срочный накопительный", "currency": "USD", "incomeType": 0.8, "sumMin": 10000, "sumMax": 500000, "termMin": 3, "termMax": 3, "canDeposit": true },
    { "bankName": "Московский Областной Банк", "investName": "Гарантированный доллар", "currency": "USD", "incomeType": 0.75, "sumMin": 50, "sumMax": null, "termMin": 4, "termMax": 4, "canDeposit": true },
    { "bankName": "Объединенный Резервный Банк", "investName": "ОРБ-Накопительный (в конце срока)", "currency": "USD", "incomeType": 1.6, "sumMin": 1000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Банк Агора", "investName": "Срочный", "currency": "USD", "incomeType": 1.5, "sumMin": 1000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Тинькофф Банк", "investName": "СмартВклад (с повышенной ставкой)", "currency": "USD", "incomeType": 1.5, "sumMin": 1000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Первый Инвестиционный Банк", "investName": "Закон сохранения", "currency": "USD", "incomeType": 1.5, "sumMin": 1000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Новый Век", "investName": "Сберегательный", "currency": "USD", "incomeType": 1.5, "sumMin": 5000, "sumMax": 20000, "termMin": 12, "termMax": 12, "canDeposit": true }
];

class Deposit {
    constructor() {
        this.initialAmount = document.getElementById('initial-amount-input').value;
        this.topUp = document.getElementById('top-up-input').value;
        this.currency = document.getElementById('currency-input').value;
        this.months = document.getElementById('months-input').value;
    }
}

class BankProduct {

}

class Calculator {
    constructor(array) {
        this.array = array;
    }
    getBestOption(object) {

        let initialFilter = this.array.filter(function (item) {
            return (
                item.currency === object.currency
                && item.sumMin <= object.initialAmount
                && (item.sumMax >= object.initialAmount || item.sumMax === null)
                && item.termMin <= object.months
                && item.termMax >= object.months
            )
        })

        let filteredBanks = initialFilter.filter(function (item) {
            if (+object.topUp > 0) {
                return item.canDeposit === true;
            }
        });

        let bestOptions = [];
        let maxRate = 0;

        for (let i of filteredBanks) {
            let selectBestOptions = filteredBanks.find((item) => Math.max(item.incomeType));
            if (selectBestOptions.incomeType >= maxRate) {
                bestOptions.push(selectBestOptions);
                maxRate = selectBestOptions.incomeType;
            }
            filteredBanks.splice(filteredBanks.indexOf(selectBestOptions), 1);
        }

        return bestOptions;
    }
}

class Checker {
    constructor(createdDeposit) {
        this.initialAmount = createdDeposit.initialAmount;
        this.topUp = createdDeposit.topUp;
        this.currency = createdDeposit.currency;
        this.months = createdDeposit.months;
    }
    toCheck() {
        return true;
        let errorText = document.getElementById('error-text');
        if (+this.initialAmount <= 0 || this.initialAmount === '') {
            errorText.innerHTML = '<span class="error-logo">i</span> Вы не правильно ввели "Начальную сумму вклада"!';
            console.warn('Начальную сумму вклада введен неправильно');
            return false;
        }
        if (+this.topUp < 0 || this.topUp === '') {
            errorText.innerHTML = '<span class="error-logo">i</span> Вы не правильно ввели "Сумму ежемесячного пополнения"!';
            console.warn('Сумму ежемесячного пополнени введен неправильно');
            return false;
        }
        if (+this.months <= 0 || this.months === '') {
            errorText.innerHTML = '<span class="error-logo">i</span> Вы не правильно ввели "Срок вклада"!';
            console.warn('Срок вклада введен неправильно');
            return false;
        }
        this.currency.toLowerCase();
        if (this.currency === '' || this.currency !== 'rub' && this.currency !== 'usd') {
            errorText.innerHTML = '<span class="error-logo">i</span> Валюта может выбран только RUB или USD!';
            console.warn('Валюта введен неправильно');
            return false;
        }
        errorText.innerHTML = "";
        return true;
    }
}

class Application {
    constructor() {
        document.getElementById('calculate-button').addEventListener('click', this.run);
    }
    run(){
        let createdDeposit = new Deposit();

        let validator = new Checker(createdDeposit);
        
        if (validator.toCheck()) {
            let runCalc = new Calculator(bankProducts);
            let bestOptions = runCalc.getBestOption(createdDeposit);
            let finalResult = this.toCalculate(createdDeposit, bestOptions);
        }
    }
    toCalculate(createdDeposit, bestOptions) {
        let results = [];
        let amount = createdDeposit.initialAmount;
        let topUp = createdDeposit.topUp;
        let months = createdDeposit.months;
        for (let i of bestOptions) {
            let rate = i.incomeType;
            for (let i = 0; i < months; i++) {
                amount = +amount + +topUp + (+amount * +rate / 100);
            }
            amount -= +topUp;
            results.push(+amount.toFixed(2));
        }
        return results;
    }
}

class RecommendedBanks {
    constructor(name, investName, incomeType, finalResult) {
        this.name = name;
        this.investName = investName;
        this.incomeType = incomeType;
        this.finalResult = finalResult;
    }
}

// TESTS:

// let createdDeposit = new Deposit(15000, 100, 'RUB', 1);
// let createdDeposit2 = new Deposit();
// console.log(createdDeposit2);

// let createdCalculator = new Calculator(bankProducts);

// let bestOption = createdCalculator.getBestOption(createdDeposit);
// let bestOption2 = createdCalculator.getBestOption(createdDeposit2);
// console.log('First crash test:');
// console.log(bestOption);
// console.log('Second crash test:');
// console.log(bestOption2);

// console.log('Potential final amounts: ');
// let createdApplication = new Application(createdDeposit2, bestOption2);
// let finalResultsOfInvestment = createdApplication.toCalculate(createdDeposit2, bestOption2);
// console.log(finalResultsOfInvestment);

new Application();