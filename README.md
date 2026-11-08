# Task 14: JavaScript Loop Project - Number Operations

This project demonstrates various number operations and mathematical algorithms implemented using JavaScript loops (`for` and `while` loops). All results are displayed via `console.log` as required and dynamically rendered on the webpage.

---

## How to Run the Project

1. **Open the Project in a Browser:**
   - Locate the project folder: `10.task 14`.
   - Double-click `index.html` (or right-click -> Open with Chrome / Edge / Firefox).

2. **Open the Developer Console (Important):**
   - Press `F12` (or `Ctrl + Shift + I` / `Cmd + Option + I`).
   - Click on the **Console** tab to view the `console.log` output.

3. **Using the User Interface:**
   - Enter any positive integer into the input box (e.g., `153`, `17`, `1634`).
   - Click the **Check** button.
   - The detailed calculations will log to the browser console and display on the webpage.

4. **Testing Functions Directly in the Console:**
   Because all operations are written as standalone modular functions, you can also test each function directly in the browser console by typing:
   ```javascript
   sumOfN(10);
   multiplicationTable(7);
   checkPrime(29);
   findFactors(36);
   sumOfDigits(489);
   checkArmstrong(153);
   checkArmstrong(1634);
   ```

---

## Operations & Algorithms Implemented

### 1. Sum of First N Numbers (`sumOfN(n)`)
- **Loop used:** `for` loop
- **Algorithm:** Initializes a running sum at `0` and loops from `1` up to `n`, adding each number to the sum.
- **Example:** For `n = 5`: `1 + 2 + 3 + 4 + 5 = 15`.

### 2. Multiplication Table (`multiplicationTable(n)`)
- **Loop used:** `for` loop
- **Algorithm:** Loops from `i = 1` to `10`, multiplying `n * i` and logging each line (`n x i = result`).

### 3. Prime Number Check with Square Root Optimization (`checkPrime(n)`)
- **Loop used:** `for` loop
- **Algorithm:**
  - Numbers $\le 1$ are not prime.
  - Instead of checking all numbers up to $n - 1$ ($O(n)$ complexity), the loop only tests divisors up to $\lfloor\sqrt{n}\rfloor$ ($O(\sqrt{n})$ complexity). If no divisor divides $n$ evenly up to $\sqrt{n}$, $n$ is prime.
- **Example:** For `17`, $\sqrt{17} \approx 4.12$, so it only tests `2, 3, 4`. Since none divide `17`, it is prime.

### 4. Factors of a Number (`findFactors(n)`)
- **Loop used:** `for` loop
- **Algorithm:** Loops from `i = 1` to `n`. If `n % i === 0`, `i` is a factor and is added to the list.
- **Example:** For `12`, the factors are `1, 2, 3, 4, 6, 12`.

### 5. Sum of Digits (`sumOfDigits(n)`)
- **Loop used:** `while` loop
- **Algorithm:**
  - Extracts the last digit using modulo operator (`temp % 10`).
  - Adds the digit to a running sum.
  - Removes the last digit using integer division (`Math.floor(temp / 10)`).
  - Repeats until `temp` reaches `0`.
- **Example:** For `1234`: `4 + 3 + 2 + 1 = 10`.

### 6. Armstrong Number Check (Generalized for Any Digit Count) (`checkArmstrong(n)`)
- **Loop used:** `while` loop
- **Algorithm:**
  - An Armstrong number (or narcissistic number) is a number that equals the sum of its own digits each raised to the power of the total number of digits.
  - Dynamically calculates the number of digits using `n.toString().length`.
  - Loops through each digit using `temp % 10`, raises it to the power of `totalDigits` (`Math.pow(digit, numDigits)`), and adds it to the sum.
  - Compares `sum === n`.
- **Examples:**
  - **3 digits:** `153` $\rightarrow 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153$ (Armstrong)
  - **4 digits:** `1634` $\rightarrow 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634$ (Armstrong)
  - **Single digit:** `9` $\rightarrow 9^1 = 9$ (Armstrong)

---

## File Structure

- `index.html` - Clean user interface with number input and result display container.
- `style.css` - Styling and layout for the container and results.
- `script.js` - Contains modular functions for all 6 operations, console logging, and event handling.
- `README.md` - Documentation and how-to-run instructions.
