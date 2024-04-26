document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdraw = getInputFieldById('user-withdraw');
    const prevWithdraw = getElementField('withdraw-total');

    const totalWithdraw = prevWithdraw + newWithdraw;

    setTextElementValueById('withdraw-total', totalWithdraw);

    const prevBalance = getElementField('balance-total');
    const totalBalance = prevBalance - totalWithdraw;
    setTextElementValueById('balance-total', totalBalance);

})
