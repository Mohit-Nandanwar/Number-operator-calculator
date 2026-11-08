// Task 14: JavaScript Loop Project - Number Operations

// 1. Sum of first n numbers using a for loop
function sumOfN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log("Sum of first " + n + " numbers: " + sum);
    return sum;
}

// 2. Multiplication table from 1 to 10 using a for loop
function multiplicationTable(n) {
    console.log("Multiplication Table of " + n + ":");
    let table = [];
    for (let i = 1; i <= 10; i++) {
        let line = n + " x " + i + " = " + (n * i);
        console.log(line);
        table.push(line);
    }
    return table;
}

// 3. Prime number check with square root optimization
function checkPrime(n) {
    if (n <= 1) {
        console.log(n + " is not a prime number");
        return false;
    }

    let isPrime = true;
    let limit = Math.floor(Math.sqrt(n)); // only check up to sqrt(n)

    for (let i = 2; i <= limit; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(n + " is a prime number (checked divisors up to sqrt: " + limit + ")");
        return true;
    } else {
        console.log(n + " is not a prime number");
        return false;
    }
}

// 4. Find all factors of a number using a for loop
function findFactors(n) {
    let factors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
        }
    }
    console.log("Factors of " + n + ": " + factors.join(", "));
    return factors;
}

// 5. Sum of digits using a while loop
function sumOfDigits(n) {
    let temp = Math.abs(n);
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit;
        temp = Math.floor(temp / 10);
    }

    console.log("Sum of digits of " + n + ": " + sum);
    return sum;
}

// 6. Armstrong number check generalized for any number of digits
function checkArmstrong(n) {
    if (n < 0) {
        console.log(n + " is not an Armstrong number");
        return false;
    }

    let numStr = n.toString();
    let numDigits = numStr.length; // power is equal to total number of digits
    let temp = n;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, numDigits);
        temp = Math.floor(temp / 10);
    }

    if (sum === n) {
        console.log(n + " is an Armstrong number (" + numDigits + "-digit sum: " + sum + ")");
        return true;
    } else {
        console.log(n + " is not an Armstrong number (" + numDigits + "-digit sum: " + sum + " != " + n + ")");
        return false;
    }
}

// Main function triggered by clicking Check button
function calculate() {
    let input = document.getElementById("number");
    let output = document.getElementById("output");
    let num = parseInt(input.value);

    if (isNaN(num)) {
        console.log("Please enter a valid number");
        output.innerHTML = "<p style='color: #ff9999;'>Please enter a valid number!</p>";
        return;
    }

    console.log("--- Results for " + num + " ---");

    // Execute individual operations and log output
    let sum = sumOfN(num);
    let table = multiplicationTable(num);
    let prime = checkPrime(num);
    let factors = findFactors(num);
    let digitsSum = sumOfDigits(num);
    let armstrong = checkArmstrong(num);

    // Also display results on the webpage
    output.innerHTML = `
        <p><b>Number:</b> ${num}</p>
        <p><b>Sum of first N numbers:</b> ${sum}</p>
        <p><b>Sum of digits:</b> ${digitsSum}</p>
        <p><b>Is Prime:</b> ${prime ? "Yes" : "No"}</p>
        <p><b>Is Armstrong:</b> ${armstrong ? "Yes" : "No"}</p>
        <p><b>Factors:</b> ${factors.join(", ")}</p>
        <p><b>Table:</b><br>${table.join("<br>")}</p>
    `;
}
