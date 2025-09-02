//     This line performs the following actions:
//     *   `document.getElementById("billAmount")`: This part locates an HTML element within the document that has the `id` attribute set to "billAmount". This element is typically an input field (e.g., `<input type="text" id="billAmount">`).
//     *   `.value`: Once the element is found, this property retrieves the current value entered into that input field. This value is always a string.
//     *   `parseFloat()`: This function attempts to parse a string argument and convert it into a floating-point number (a number with a decimal). This is crucial because input field values are strings, and mathematical operations require numerical types.
//     *   `const bill = ...`: The resulting floating-point number is then assigned to a constant variable named `bill`.

// 2.  ```javascript
//     const tipPercent = parseFloat(document.getElementById("tipPercent").value);


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
