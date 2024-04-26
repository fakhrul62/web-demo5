function getInputFieldById(inputId){
    const inputFieldValue = document.getElementById(inputId);
    const newValueString = inputFieldValue.value;
    const newValue = parseFloat(newValueString);
    inputFieldValue.value = '';
    return newValue;
}

function getElementField(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementTotal = parseFloat(elementString);
    return elementTotal;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldById('user-deposit');

    const previousAmount = getElementField('deposit-total');

    const newdepositTotal = previousAmount + newDepositAmount;

    setTextElementValueById('deposit-total', newdepositTotal);

    const prevBalance = getElementField('balance-total');
    const newBalance = prevBalance + newdepositTotal;

    setTextElementValueById('balance-total', newBalance);

})

