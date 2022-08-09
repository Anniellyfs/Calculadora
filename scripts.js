const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operator]")
const equalsButton = document.querySelectorAll("[data-equals]")
const deleteButton = document.querySelectorAll("[data-delete]")
const allclearButton = document.querySelectorAll("[data-all-clear]")
const previousOperandTextElement = document.querySelectorAll("[data-previous-operand]")
const currentOperandTextElement = document.querySelectorAll("[data-current-operand]")

class calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    choseOperation(operation){
        this.operation = operation;

        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }

    appendNumber(number){
        if (this.currentOperand.includes('.') && number == '.') return;
        this.currentOperand = `${this.currentOperand}${number.toString()}`;
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    updateDisplay(){
        this.previousOperandTextElement.innerText = this.previousOperand;
        this.currentOperandTextElement.innerText = this.currentOperand; 
    }
}

const calculator = new calculator(
    previousOperandTextElement,
    currentOperandTextElement 
);

for(const numberButton of numberButtons){
    numberButton.addEventListener('click', () => {
        calculator.appendNumber(numberButton.innerText);
        calculator.updateDisplay();
    })
}

for( const operationButton of operationButtons){
    operationButton.addEventListener('click', () => {
        calculator.choseOperation(operationButton.innerText);
        calculator.updateDisplay();
    });
}

allclearButton.addEventlistener('click', () =>{
    calculator.clear();
    calculator.updateDisplay();
})