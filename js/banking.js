function getInputValue(inputId) {
  const input = document.getElementById(inputId);
  const depoWithValue = input.value;
  const depoWithFloat = parseFloat(depoWithValue);
  input.value = "";
  return depoWithFloat;
}
function getTotalValue(a, b) {
  const depositTotal = document.getElementById(a);
  const depositeValue = depositTotal.innerText;
  const depositeValueFloat = parseFloat(depositeValue);
  const total = depositeValueFloat + b;
  depositTotal.innerText = total;
}
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //function
    const depositAmountFloat = getInputValue("deposit-input");

    //deposit get
    getTotalValue("deposit-total", depositAmountFloat);
    //update balance;
    const balance = document.getElementById("balance-total");
    const balanceValue = balance.innerText;
    const balanceFloat = parseFloat(balanceValue);
    const totalBalance = depositAmountFloat + balanceFloat;
    balance.innerText = totalBalance;
  });
//withdraw balance
document.getElementById("withdraw-btn").addEventListener("click", function () {
  //function
  const withdrawFloat = getInputValue("withdraw-input");
  //
  //   const withdrawTotal = document.getElementById("withdraw-total");
  //   const withdrawInner = withdrawTotal.innerText;
  //   const withdrawFloatDisplay = parseFloat(withdrawInner);
  //   const withdrawTotalDisplay = withdrawFloat + withdrawFloatDisplay;
  //   withdrawTotal.innerText = withdrawTotalDisplay;
  getTotalValue("withdraw-total", withdrawFloat);
  //balance total minus;
  const balanceTotal = document.getElementById("balance-total");
  const balanceText = balanceTotal.innerText;
  const balanceFloatTotal = parseFloat(balanceText);
  //
  const grandTotal = balanceFloatTotal - withdrawFloat;
  balanceTotal.innerText = grandTotal;
  //clean input
  //   withdrawInput.value = "";
});

// function getInputValue(inputId) {
//   const depositInput = document.getElementById(inputId);
//   const depositValue = depositInput.value;
//   const depositFloat = parseFloat(depositValue);
//   depositInput.value = "";
//   return depositFloat;
// }

// document
//   .getElementById("deposit-button")
//   .addEventListener("click", function () {
//     const depositFloat = getInputValue("deposit-input");
//     const depositTotal = document.getElementById("deposit-total");
//     const depositText = depositTotal.innerText;
//     //deposit plus;
//     const depositInputFloat = parseFloat(depositText);
//     const newTotalDeposit = depositFloat + depositInputFloat;
//     //deposit balance plus;
//     const balanceTotal = document.getElementById("balance-total");
//     const balanceText = balanceTotal.innerText;
//     const balanceFloat = parseFloat(balanceText);
//     const newTotalBalance = balanceFloat + newTotalDeposit;
//     balanceTotal.innerText = newTotalBalance;
//     //deposit value set;
//     depositTotal.innerText = newTotalDeposit;
//   });
// /////////////////
// //withdraw btn;
// document.getElementById("withdraw-btn").addEventListener("click", function () {
//   const withdrawInput = document.getElementById("withdraw-input");
//   const withdrawValue = withdrawInput.value;
//   const withdrawFloat = parseFloat(withdrawValue);
//   // withdraw total;
//   const withdrawTotal = document.getElementById("withdraw-total");
//   const withdrawText = withdrawTotal.innerText;
//   const withdrawTotalFloat = parseFloat(withdrawText);
//   const newTotalWithdraw = withdrawTotalFloat + withdrawFloat;
//   withdrawTotal.innerText = newTotalWithdraw;
//   //clean input;
//   withdrawInput.value = "";
//   // balance minus;
//   const balanceMinus = document.getElementById("balance-total");
//   const balanceText = balanceMinus.innerText;
//   const balanceFloat = parseFloat(balanceText);
//   const newTotalBalance = balanceFloat - withdrawFloat;
//   balanceMinus.innerText = newTotalBalance;
// });
