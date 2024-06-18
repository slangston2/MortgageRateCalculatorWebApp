function calcPayment() {
  const principal = document.getElementById("principal").value;
  const yearlyRate = document.getElementById("rate").value;
  const years = document.getElementById("years").value;

  if (principal <= 0 || yearlyRate <= 0) {
    alert("Enter positive values in the blanks below.");
    return;
  }

  const monthlyRate = yearlyRate / 1200;
  const mortgageLength = years * 12;

  const payment =
    (principal * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -mortgageLength));

  document.getElementById("result").innerText =
    `Monthly Payment: $${payment.toFixed(2)}`;
}
