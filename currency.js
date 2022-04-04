class Currency {
    constructor(secondCurrency) {
        this.secondCurrency = secondCurrency;
        this.url = 'http://api.exchangeratesapi.io/v1/latest?access_key=43ab07baeed6d3737716b5a4cde3b287&format=1';
        this.amount = null;
    }

    exchange() {
        return new Promise((resolve, reject) => {
            fetch(this.url)
                .then(response => response.json())
                .then(data => {
                    const parity = data.rates[this.secondCurrency]
                    const amount2 = Number(this.amount)
                    let total = parity * amount2;
                    resolve(total)
                })
                .catch(err => reject(err));
        })

    }

    changeAmount(amount) {
        this.amount = amount
    }
    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency
    }

}