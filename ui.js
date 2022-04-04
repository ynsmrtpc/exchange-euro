class UI {
    constructor(secondSelect) {
        this.secondSelect = secondSelect
        this.outputSecond = document.getElementById('outputSecond')
        this.outputResult = document.getElementById('outputResult')
    }
    changeSecond() {
        this.outputSecond.textContent = this.secondSelect.options[this.secondSelect.selectedIndex].textContent

    }

    displayResult(result) {
        this.outputResult.value = result
    }
}