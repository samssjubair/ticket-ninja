//ticket amount handler function to extract no of ticket of both first class and economy category
function ticketAmountHandler(isIncrease, category) {
  let ticketAmount = parseInt(
    document.getElementById(category + "Input").value
  );

  if (isIncrease) {
    ticketAmount = ticketAmount + 1;
  } else {
    ticketAmount = ticketAmount - 1;
  }
  if (ticketAmount >= 0) {
    document.getElementById(category + "Input").value = ticketAmount;
    amountCalculation();
  }
}


//subtotal calculation section
function subTotalPrice() {
  const fClassUnitPrice = 150;
  const economyUnitPrice = 100;
  const fClassAmount = parseInt(document.getElementById("fClassInput").value);
  const economyAmount = parseInt(document.getElementById("economyInput").value);
  const subTotal =
    fClassAmount * fClassUnitPrice + economyAmount * economyUnitPrice;

  return subTotal;
}


//subtotal, vat and total display section
function amountCalculation() {
  const subTotal = subTotalPrice();
  const tax = subTotal * 0.1;
  const total = subTotal + tax;
  document.getElementById("subTotal").innerText = subTotal;
  document.getElementById("vat").innerText = tax;
  document.getElementById("total").innerText = total;
}


//book now button handler
function bookNowHandler() {
  const total = subTotalPrice() + subTotalPrice() * 0.1;
  if (total > 0) {
    document.getElementById("success-total").innerText = total;
    document.getElementById("success-section").style.display = "block";
    document.getElementById("main-section").style.display = "none";
  }
}
