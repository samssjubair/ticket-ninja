function ticketAmountHandler(isIncrease, category) {
  let fClassAmount = parseInt(document.getElementById(category+"Input").value);

  if (isIncrease ) {
    fClassAmount = fClassAmount + 1;
  } else {
    fClassAmount = fClassAmount - 1;
  }
  if (fClassAmount >= 0) {
    document.getElementById(category+"Input").value = fClassAmount;
    amountCalculation();
  }
}

function amountCalculation() {
  const fClassAmount = parseInt(document.getElementById("fClassInput").value);
  const economyAmount = parseInt(document.getElementById("economyInput").value);
  const subTotal = fClassAmount * 150 + economyAmount * 100;
  const tax = subTotal * 0.1;
  const total = subTotal + tax;
  document.getElementById("subTotal").innerText = subTotal;
  document.getElementById("vat").innerText = tax;
  document.getElementById("total").innerText = total;
}
