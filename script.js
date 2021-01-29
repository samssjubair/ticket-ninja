function ticketAmountHandler(isIncrease, category) {
  let fClassAmount = parseInt(
    document.getElementById(category + "Input").value
  );

  if (isIncrease) {
    fClassAmount = fClassAmount + 1;
  } else {
    fClassAmount = fClassAmount - 1;
  }
  if (fClassAmount >= 0) {
    document.getElementById(category + "Input").value = fClassAmount;
    amountCalculation();
  }
}
function subTotalPrice() {
  const fClassAmount = parseInt(document.getElementById("fClassInput").value);
  const economyAmount = parseInt(document.getElementById("economyInput").value);
  const subTotal = fClassAmount * 150 + economyAmount * 100;

  return subTotal;
}

function amountCalculation() {
    const subTotal=subTotalPrice();
  const tax = subTotal * 0.1;
  const total = subTotal + tax;
  document.getElementById("subTotal").innerText = subTotal;
  document.getElementById("vat").innerText = tax;
  document.getElementById("total").innerText = total;
}

function bookNowHandler() {
    const subTotal=subTotalPrice()+subTotalPrice()*.1;
  document.getElementById("success-total").innerText = subTotal ;
  document.getElementById("success-section").style.display = "block";
  document.getElementById("main-section").style.display = "none";
}
