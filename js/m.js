function getInputFieldById(inputId){
    const inputFieldValue = document.getElementById(inputId);
    const newValueString = inputFieldValue.value;
    const newValue = parseFloat(newValueString);
    return newValue;
}

function getElementField(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementTotal = parseFloat(elementString);
    return elementTotal;
}

document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldById('user-deposit');


    const getElementField = getInputFieldById('deposit-total');

    console.log(newDepositAmount);


})