const body = document.querySelector('body')
body.className = 'body'

const mainBox = document.createElement('div')
mainBox.className = 'flex'

const resultBox = document.createElement('div')
resultBox.className = 'result'
resultBox.textContent = ''

const display = document.createElement('div')
display.className = 'display'


const previewLastNumber = document.createElement('div')
previewLastNumber.className = 'previewLastNumber'
previewLastNumber.textContent = ''




let tab = ['(', ')', '%', 'AC', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+']

let line
let button



resultBox.appendChild(previewLastNumber)
mainBox.appendChild(resultBox)





for(let i = 0; i < tab.length; i++) {
    button= document.createElement('button')
    button.textContent = tab[i]
    button.className = 'button'
    if(i <= 3) {
        button.className = 'operand'
    }
    if(i % 4 === 3) {
        button.className = 'operand'
    }
    if(i % 4 === 0) {
        line = document.createElement('div')
    line.className = 'flexrow'
    }
    
    
    let cases = tab[i]
    switch(cases) {
        case 'AC':
            button.addEventListener('click', function () {
                resultBox.textContent = ''
                
            })
            break
        case '=':
            button.addEventListener('click', function () {
                resultBox.textContent=Function('return ' + resultBox.textContent)()
            }) 
            break
        case '.':
            button.addEventListener('click', function () {
                if (resultBox.textContent.slice(-1) == '.') {
                    resultBox.textContent += ''

                } else {
                    resultBox.textContent += '.'
                }
            })
            break
        case '%':
            button.addEventListener('click', function(){
                resultBox.textContent = resultBox.textContent/100
                resultBox.textContent += '%'
                if (resultBox.textContent.slice(-1) == '%') {
                    resultBox.textContent += ''

                } else {
                    resultBox.textContent += '%'
                }
            })
            break
        case '+': 
        button.addEventListener('click', function(){
            if (resultBox.textContent.slice(-1) == '+') {
                resultBox.textContent += ''

            } else {
                resultBox.textContent += '+'
            }
        })
            break
            case '/': 
            button.addEventListener('click', function(){
                if (resultBox.textContent.slice(-1) == '/') {
                    resultBox.textContent += ''
    
                } else {
                    resultBox.textContent += '/'
                }
            })
            break
            case '-': 
            button.addEventListener('click', function(){
                if (resultBox.textContent.slice(-1) == '-') {
                    resultBox.textContent += ''
    
                } else {
                    resultBox.textContent += '-'
                }
            })
                break
    
        default: 
            button.addEventListener('click', function () {
                resultBox.textContent += tab[i]
               
            })
    }
    body.appendChild(mainBox)
    mainBox.appendChild(line)
    line.appendChild(button)
   
    
}


document.body.addEventListener('keypress', function (e) {
    if (e.code === "Enter") {
        resultBox.innerHTML = Function('return ' + resultBox.innerHTML)();
    }
})




body.appendChild(mainBox)

 