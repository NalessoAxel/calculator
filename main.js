const body = document.querySelector('body')
body.className = 'body'

const mainBox = document.createElement('div')
mainBox.className = 'flex'

const resultBox = document.createElement('div')
resultBox.className = 'result'
resultBox.textContent = '0'

let tab = ['(', ')', '%', 'AC', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+']

let line
let button


mainBox.appendChild(resultBox)

for(let i = 0; i < tab.length; i++) {
    button= document.createElement('div')
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
    
    body.appendChild(mainBox)
    mainBox.appendChild(line)
    line.appendChild(button)
}
