const container = document.querySelector(".container");

const display = document.querySelector("div.display");
console.log(display.textContent);
let operand1, operand2, operator;
const buttons = document.querySelectorAll("button");
let haveResult = false;

populate();
function populate(){
    //Keyboard events
    document.addEventListener('keydown', (event) => {
        console.log('Key down: ', event.key);
        if(Number.isFinite(parseFloat(event.key))){
                if(haveResult){
                    display.textContent = 0;
                    haveResult = false;
                }
                if(operator && display.textContent == operand1) display.textContent = ''

                if(display.textContent == 0){
                    display.textContent = parseFloat(event.key);
                }else{
                    display.textContent += parseFloat(event.key);
                }
            }
            else{
                if (operator){
                    operand2 = parseFloat(display.textContent);
                }else{
                    operand1 = parseFloat(display.textContent);
                }
                switch (event.key) {
                    case "+" || "-" || "/" || "*":
                        if(event.key == "+"){
                            pressed = "add"
                        }else if(event.key == "-"){
                            pressed = "subtract"
                        }else if(event.key == "/"){
                            pressed = "divide"
                        }else if(event.key == "*"){
                            pressed = "multiply"
                        }

                        if(operand2){
                            console.log(operator);
                            console.log(pressed);
                            operand1 = operation(operand1, operand2, operator);
                            display.textContent =  display.textContent.length >=6 ?  parseFloat(operand1).toFixed(6) : parseFloat(operand1) ;
                            operand2 = '';
                            operator = pressed;
                        }else{
                            operator = pressed;
                        }
                        break;
                    case "Enter":
                        if(operator){
                            operand1 = operation(operand1, operand2, operator);
                            display.textContent =  display.textContent.length >=6 ?  parseFloat(operand1).toFixed(6) : parseFloat(operand1) ;
                            operand2 = '';
                            operator = '';
                            haveResult = true;
                        }
                        break;
                    case "clear":
                        display.textContent = 0;
                        operand1 = '';
                        operand2 = '';
                        operator = '';
                        break;
                    case "-":
                        if(display.textContent == '' || display.textContent == 0){
                            display.textContent = -display.textContent
                        }else{
                            pressed = "subtract";
                            if(operand2){
                                console.log(operator);
                                console.log(pressed);
                                operand1 = operation(operand1, operand2, operator);
                                display.textContent =  display.textContent.length >=6 ?  parseFloat(operand1).toFixed(6) : parseFloat(operand1) ;
                                operand2 = '';
                                operator = pressed;
                            }else{
                                operator = pressed;
                            }                            
                        }
                        break;
                    case "dot":
                        if(!display.textContent.includes(".")) display.textContent = display.textContent+ "."
                        break;
                    case 'Backspace':
                        display.textContent = display.textContent.slice(0, -1)
                        break;
                }
            }
        
    })

    // Buttons in the calculator
    buttons.forEach(button =>{
        button.addEventListener("click", () =>{
            if(Number.isFinite(parseFloat(button.textContent))){
                if(haveResult){
                    display.textContent = 0;
                    haveResult = false;
                }
                if(operator && display.textContent == operand1) display.textContent = ''

                if(display.textContent == 0){
                    display.textContent = parseFloat(button.textContent);
                }else{
                    display.textContent += parseFloat(button.textContent);
                }
            }
            else{
                if (operator){
                    operand2 = parseFloat(display.textContent);
                }else{
                    operand1 = parseFloat(display.textContent);
                }
                switch (button.className) {
                    case "operator":
                        if (operator) {
                            operator = button.id;}
                        else{
                            if(operand2){
                                operand1 = operation(operand1, operand2, operator);
                                display.textContent =  display.textContent.length >=6 ?  parseFloat(operand1).toFixed(6) : parseFloat(operand1) ;
                                operand2 = '';
                                operator = button.id;
                            }else{
                                operator = button.id;
                            }
                        }
                        break;
                    case "equals":
                        if(operator){
                            operand1 = operation(operand1, operand2, operator);
                            display.textContent =  display.textContent.length >=6 ?  parseFloat(operand1).toFixed(6) : parseFloat(operand1) ;
                            operand2 = '';
                            operator = '';
                            haveResult = true;
                        }
                        break;
                    case "clear":
                        display.textContent = 0;
                        operand1 = '';
                        operand2 = '';
                        operator = '';
                        break;
                    case "negative":
                        display.textContent = -display.textContent
                        break;
                    case "dot":
                        if(!display.textContent.includes(".")) display.textContent = display.textContent+ "."
                        break;
                    case "backspace":
                        display.textContent = display.textContent.slice(0, -1)
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
            if (num2 == 0) return 440
            return divide(num1, num2);   
        default:
            break;
    }
}