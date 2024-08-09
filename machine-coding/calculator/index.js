function mortgageCalculate() {
    const form = document.querySelector(".calculator-form");

    const monthlyPaymentAmount = document.querySelector("#monthly-payment-amount");
    const totalPaymentAmount = document.querySelector("#total-payment-amount");
    const totalInterestPaid = document.querySelector("#total-interest-paid");
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const data = new FormData(event.target);

        try {
            const loanAmount = parseFloat(data.get("loan-amount"));
            const loanTermInMonths = parseFloat(data.get("loan-term"))*12;
            const monthlyInterestRate = (parseFloat(data.get("interest-rate"))/100)/12;

            const mPA = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermInMonths)) / (Math.pow(1 + monthlyInterestRate, loanTermInMonths) - 1);

            const tPA = mPA * loanTermInMonths;

            const tIP = tPA - loanAmount;

            let rupee = new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
            });
            
            monthlyPaymentAmount.textContent = rupee.format(mPA);
            totalPaymentAmount.textContent = rupee.format(tPA);
            totalInterestPaid.textContent = rupee.format(tIP);
        } catch (err) {
            alert('Error submitting form');
        }
    });
}

mortgageCalculate();