function getProductAmount(inputFieldId, isIncrease) {
    const productAmountField = document.getElementById(inputFieldId);
    const productAmountString = productAmountField.value;
    let productAmount = parseInt(productAmountString);
    if (isIncrease === true) {
        productAmount = productAmount + 1;
    } else {
        productAmount = productAmount - 1;
    }

    productAmountField.value = productAmount;
    return productAmount;
};
function setTotalPrice(elementFieldId, productAmount, singleProductPrice) {
    const productPriceElement = document.getElementById(elementFieldId);
    const productPrice = parseInt(productPriceElement.innerText);
    const totalProductPrice = productAmount * singleProductPrice;

    productPriceElement.innerText = totalProductPrice;
}
function calculateTotal() {
    // subTotal calculation
    const casePrice = parseInt(document.getElementById('case-price').innerText);
    const phonePrice = parseInt(document.getElementById('phone-price').innerText);
    const subTotal = casePrice + phonePrice;
    document.getElementById('subtotal-amount').innerText = subTotal;
    // tax calculation
    const tax = subTotal * 0.1;
    // total price
    const totalPrice = subTotal + tax;
    document.getElementById('total-amount').innerText = totalPrice;
}