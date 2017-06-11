'use script'

var allAgreemenst = document.getElementById('wszystkie-zgody');

var allCheckBox = document.querySelectorAll('inpu[type=checkbox]');


function checkboxState(state) {
    for(var i = 0; i < allCheckBoxes.length - 1; i++){
        allCheckBoxes[i].checked = state;
        allCheckBoxes[i].disable = state;
    }
}

allAgreemenst.onchange = function(){
    checkboxState(this.checked);
}






document.getElementById('wyslij').addEventListener('click', validateForm);

function validateForm(event) {
    event.preventDefault();
    
    var textInputs = document.querySelectorAll('inpu[type=text]');
    
    for(var i = 0; i<textInputs.length; i++) {
        if(textInputs[i].value=='') {
            event.preventDefault();
        createAlert();
        }
    }
}


function createAlert() {
    var message = document.createElement('p');
    message.id = 'alert';
    message.innerHTML = 'To pole jest wymagane';
    document.querySelectorAll('inpu[type=text]')[0].parentNode.insertBefore(message, document.querySelectorAll('inpu[type=text]')[0].nextSibling);
}