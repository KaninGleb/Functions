// Deposit:
const depositAmount = parseFloat(prompt("Enter the deposit amount:"));
const yearlyRate = parseFloat(prompt("Enter the yearly rate:"));
const depositTermInYears = parseFloat(prompt("Enter the deposit term in years:"));
console.log(depositAmount, yearlyRate, depositTermInYears);


function getDepositIncome(amount, rate, term) {
    let depositIncome = 0;
    let count = 0;

    while (count < term) {
        depositIncome = depositIncome + amount * (rate / 100);
        count = count + 1;
        console.log(depositIncome);
    }
    return depositIncome;
}

// Total:
const depositIncome_1 = getDepositIncome(depositAmount, yearlyRate, depositTermInYears);

console.log(depositIncome_1);
alert(`Your total deposit income over ${depositTermInYears} years is: $${depositIncome_1.toFixed(2)}`);