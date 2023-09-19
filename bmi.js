function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const feet = parseFloat(document.getElementById('feet').value);
    const inches = parseFloat(document.getElementById('inches').value);
  
    if (isNaN(weight) || isNaN(feet) || isNaN(inches) || feet < 0 || inches < 0 || weight <= 0) {
      document.getElementById('result').innerHTML = '<div class="alert alert-danger">Please enter valid values for weight and height.</div>';
      return;
    }
  
    const heightInCm = (feet * 30.48) + (inches * 2.54); // Convert feet and inches to centimeters
  
    const bmi = weight / (heightInCm / 100) ** 2; // Convert height to meters for BMI calculation
    let bmiCategory;
  
    if (bmi < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmi < 24.9) {
      bmiCategory = 'Normal weight';
    } else if (bmi < 29.9) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obese';
    }
  
    const resultText = `Your BMI is ${bmi.toFixed(2)}, which falls under the category: ${bmiCategory}.`;
  
    document.getElementById('result').innerHTML = `
      <div class="alert alert-success">${resultText}</div>
    `;
  }
  