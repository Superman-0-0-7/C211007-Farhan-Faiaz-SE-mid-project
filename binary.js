function convertBinaryToDecimal() {
    const binaryInput = document.getElementById('binaryInput').value.trim();
  
    // Check if the input is a valid binary number
    if (!/^[01]+$/.test(binaryInput)) {
      document.getElementById('decimalOutput').innerHTML = '<div class="alert alert-danger">Please enter a valid binary number (0s and 1s).</div>';
      return;
    }
  
    const decimalOutput = parseInt(binaryInput, 2);
  
    document.getElementById('decimalOutput').innerHTML = `
      <div class="alert alert-success">Decimal equivalent: ${decimalOutput}</div>
    `;
  }
  