function calculateTip() {
  const bill = parseFloat(document.getElementById("billAmount").value);
  const tipPercent = parseFloat(document.getElementById("tipPercent").value);

  if (isNaN(bill) || bill <= 0) {
    alert("Please enter a valid bill amount.");
    return;
  }

  const tip = (bill * tipPercent) / 100;
  const total = bill + tip;

  document.getElementById("tipAmount").textContent = tip.toFixed(2);
  document.getElementById("totalAmount").textContent = total.toFixed(2);
}
