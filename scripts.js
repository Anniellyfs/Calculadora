const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operator]")
const equalsButton = document.querySelectorAll("[data-equals]")
const deleteButton = document.querySelectorAll("[data-delete]")
const previousOperandTextElement = document.querySelectorAll("[data-previous-operand]")
const currentOperandTextElement = document.querySelectorAll("[data-current-operand]")

class calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
}
