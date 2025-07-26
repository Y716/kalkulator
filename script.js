const container = document.querySelector(".container");

const display = document.querySelector("div.display");
console.log(display.textContent);
let operand1, operand2, operator;
const buttons = document.querySelectorAll("button");

populate();
function populate(){
    buttons.forEach(button =>{
        button.addEventListener("click", () =>{
            if (operator && !operand2) display.textContent = ''
            if(Number.isInteger(parseInt(button.textContent))){
                if(display.textContent == 0){
                    display.textContent = parseInt(button.textContent);
                }else{
                    display.textContent += parseInt(button.textContent);
                }
            }
            else{
                if (operator){
                    operand2 = parseInt(display.textContent);
                }else{
                    operand1 = parseInt(display.textContent);
                }
                switch (button.className) {
                    case "operator":
                        if(operand2){
                            operand1 = operation(operand1, operand2, operator);
                            display.textContent = parseInt(operand1);
                            operand2 = '';
                            operator = button.id;
                        }else{
                            console.log(button.id);
                            operator = button.id;
                        }
                        break;
                    case "equals":
                        if(operator){
                            console.log(operand1);
                            console.log(operand2);
                            console.log(operator);
                            operand1 = operation(operand1, operand2, operator);
                            console.log(operand1);
                            display.textContent = parseInt(operand1);
                            operand2 = '';
                            operator = '';
                        }
                        break;
                    case "clear":
                        display.textContent = 0;
                        operand1 = '';
                        operand2 = '';
                        operator = '';
                        break;                    
                }
            }
        
    })
    })
    
}


function add(num1, num2){
    return num1+num2
}

function subtract(num1, num2){
    return num1-num2
}

function multiply(num1, num2){
    return num1*num2
}

function divide(num1, num2){
    return num1/num2
}

function operation(num1, num2, operator){
    switch (operator) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);   
        default:
            break;
    }
}