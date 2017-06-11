'use strict'


document.getElementsByTagName('button')[0].onclick = ustawTlo

function ustawTlo() {
    
    document.getElementById('par1').style.backgroundColor = 'red';
    
    document.getElementById('par2').style.backgroundColor = 'yellow';
    
}

console.log(ustawTlo);