const amountElement = document.getElementById('amount')
const secondSelect = document.getElementById('secondCurrency')
const currency = new Currency("USD")
const ui = new UI(secondSelect)
eventListener();

function eventListener() {
    amountElement.addEventListener('input', exchangeCurreny);

    secondSelect.onchange = function() {
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent)
        ui.changeSecond()
    }
}

function exchangeCurreny() {
    currency.changeAmount(amountElement.value)
    currency.exchange()
        .then(result => {
            ui.displayResult(result)
        })
        .catch(err => console.log(err))
}