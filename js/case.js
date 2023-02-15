document.getElementById('case-plus-btn').addEventListener('click', function () {
    const caseAmount = getProductAmount('case-amount', true);
    console.log(caseAmount);
    setTotalPrice('case-price', caseAmount, 59);
    calculateTotal();
});
document.getElementById('case-minus-btn').addEventListener('click', function () {
    const caseAmount = getProductAmount('case-amount', false);
    console.log(caseAmount);
    setTotalPrice('case-price', caseAmount, 59);
    calculateTotal();
});
