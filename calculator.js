const buttons = document.querySelectorAll(".button")
const topOutput = document.querySelectorAll(".top")[0]
const bottomOutput = document.querySelectorAll(".bottom")[0]

let firstValue = new String()
let operation = new String()

function operate(num1, num2, operation) {   
    let int1 = new Number(num1) 
    let int2 = new Number(num2) 

    switch(operation) {
        case "add":
            return int1 + int2;
        case "subtract":
            return int1 - int2;
        case "multiply":
            return int1 * int2;
        case "divide":
            return int1 / int2;
    }
}

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        button.classList.add("active")

        let value = e.target.dataset.val

        if(value < 10) {
            if(!topOutput.textContent) {
                firstValue += value;
            }

            bottomOutput.textContent += value
        } else if (value == "decimal") {
            if(bottomOutput.textContent) {
                if(!topOutput.textContent) {
                    firstValue += ".";
                }

                bottomOutput.textContent += "."
            }
        } else if (value == "plus") {
            if(bottomOutput.textContent) {
                if(topOutput.textContent && bottomOutput.textContent) {
                    let num = Math.round(operate(firstValue, bottomOutput.textContent, operation) * 100) / 100
    
                    topOutput.textContent = `${num} +`
                    bottomOutput.textContent = null;
    
                    firstValue = num
                    operation = "add"
    
                } else {
                    topOutput.textContent += `${firstValue} +`
                    bottomOutput.textContent = null
                    operation = "add"
                }
            }
        } else if (value == "minus") {
            if(bottomOutput.textContent) {
                if(topOutput.textContent && bottomOutput.textContent) {
                    let num = Math.round(operate(firstValue, bottomOutput.textContent, operation) * 100) / 100

                    topOutput.textContent = `${num} -`
                    bottomOutput.textContent = null;

                    firstValue = num
                    operation = "subtract"

                } else {
                    topOutput.textContent += `${firstValue} -`
                    bottomOutput.textContent = null
                    operation = "subtract"
                }
            }
        } else if (value == "multiply") {
            if(bottomOutput.textContent) {
                if(topOutput.textContent && bottomOutput.textContent) {
                    let num = Math.round(operate(firstValue, bottomOutput.textContent, operation) * 100) / 100

                    topOutput.textContent = `${num} x`
                    bottomOutput.textContent = null;

                    firstValue = num
                    operation = "multiply"

                } else {
                    topOutput.textContent += `${firstValue} x`
                    bottomOutput.textContent = null
                    operation = "multiply"
                }
            }
        } else if (value == "divide") {
            if(bottomOutput.textContent) {
                if(topOutput.textContent && bottomOutput.textContent) {
                    let num = Math.round(operate(firstValue, bottomOutput.textContent, operation) * 100) / 100

                    topOutput.textContent = `${num} ÷`
                    bottomOutput.textContent = null;

                    firstValue = num
                    operation = "divide"

                } else {
                    topOutput.textContent += `${firstValue} ÷`
                    bottomOutput.textContent = null
                    operation = "divide"
                }
            }
        } else if (value == "equals") {
            if(bottomOutput.textContent && topOutput.textContent) {
                topOutput.textContent = null;
                bottomOutput.textContent = Math.round(operate(firstValue, bottomOutput.textContent, operation) * 100) / 100
                firstValue = bottomOutput.textContent;
            }
        } else if (value == "delete") {
            if(!topOutput.textContent) {
                firstValue = firstValue.substring(0, firstValue.length-1);
            }
            bottomOutput.textContent = bottomOutput.textContent.substring(0, bottomOutput.textContent.length-1);
        } else if (value == "clear") {
            firstValue = new String();
            topOutput.textContent = null;
            bottomOutput.textContent = null;
    }    
    })
})

window.addEventListener("keydown", (e) => {
    let keyCode = e.key
    
    if(keyCode < 10) {
        buttons.forEach(button => {
            if(button.dataset.val == keyCode) {
                button.click()
                button.classList.add("active")
            }
        })
    } else if(keyCode == ".") {
        buttons.forEach(button => {
            if(button.dataset.val == "decimal") {
                button.click()
                button.classList.add("active")
            }
        })
    } else if(keyCode == "+") {
        buttons.forEach(button => {
            if(button.dataset.val == "plus") {
                button.click()
                button.classList.add("active")
            }
        })
    } else if(keyCode == "-") {
        buttons.forEach(button => {
            if(button.dataset.val == "minus") {
                button.click()
                button.classList.add("active")
            }
        })
    } else if(keyCode == "*") {
        buttons.forEach(button => {
            if(button.dataset.val == "multiply") {
                button.click()
                button.classList.add("active")
            }
        })
    } else if(keyCode == "/") {
        buttons.forEach(button => {
            if(button.dataset.val == "divide") {
                button.click()
                button.classList.add("active")
            }
        })
    } else if(keyCode == "=" || keyCode == "Enter") {
        buttons.forEach(button => {
            if(button.dataset.val == "equals") {
                button.click()
                button.classList.add("active")
            }
        })
    } else if(keyCode == "Backspace") {
        buttons.forEach(button => {
            if(button.dataset.val == "delete") {
                button.click()
                button.classList.add("active")
            }
        })
    }
    else if(keyCode == "c") {
        buttons.forEach(button => {
            if(button.dataset.val == "clear") {
                button.click()
                button.classList.add("active")
            }
        })
    }
})

Array.from(buttons).forEach((button) => {
    button.addEventListener("transitionend", (e) => {
        if(e.propertyName !== "transform") return;
        button.classList.remove("active")
    })
})
    