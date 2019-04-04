function calculateTip() {
  var billAmount = Number(document.querySelector('input[name="amount"]').value);
  var quality = Number(document.querySelector('.quality-selector').value);
  var totalAmount = document.querySelector('.total-amount');
  var tipAmount = document.querySelector('.tip-amount');

  //Calulate the tip
  var tip = billAmount / 100 * quality;
  var total = billAmount + tip;

  //Show total amount & tip amount
  totalAmount.innerHTML = total;
  tipAmount.innerHTML = tip;

}
