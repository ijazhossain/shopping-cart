document.getElementById('phone-plus-btn').addEventListener('click', function () {
    const phoneAmount = getProductAmount('phone-amount', true);
    setTotalPrice('phone-price', phoneAmount, 1219);
    calculateTotal();
});
document.getElementById('phone-minus-btn').addEventListener('click', function () {
    const phoneAmount = getProductAmount('phone-amount', false);
    setTotalPrice('phone-price', phoneAmount, 1219);
    calculateTotal();
});
