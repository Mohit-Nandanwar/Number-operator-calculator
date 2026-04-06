function calculate() {
    let num = parseInt(document.getElementById("number").value);
    let output = document.getElementById("output");

    if (isNaN(num)) {
        output.innerHTML = "Please enter a valid number!";
        return;
    }

    // Sum of first n numbers
    let sumN = 0;
    for (let i = 1; i <= num; i++) {
        sumN += i;
    }

    // Table
    let table = "";
    for (let i = 1; i <= 10; i++) {
        table += `${num} x ${i} = ${num * i}<br>`;
    }

    // Prime check
    let isPrime = true;
    if (num <= 1) isPrime = false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    // Factors
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }

    // Sum of digits
    let temp = num;
    let digitSum = 0;
    while (temp > 0) {
        digitSum += temp % 10;
        temp = Math.floor(temp / 10);
    }

    // Armstrong check
    temp = num;
    let digits = num.toString().length;
    let armstrongSum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        armstrongSum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }

    let isArmstrong = armstrongSum === num;

    // Output
    output.innerHTML = `
        <p><b>Number:</b> ${num}</p>
        <p><b>Sum of first n numbers:</b> ${sumN}</p>
        <p><b>Sum of digits:</b> ${digitSum}</p>
        <p><b>Prime:</b> ${isPrime ? "Yes" : "No"}</p>
        <p><b>Armstrong:</b> ${isArmstrong ? "Yes" : "No"}</p>
        <p><b>Factors:</b> ${factors.join(", ")}</p>
        <p><b>Table:</b><br>${table}</p>`;
}