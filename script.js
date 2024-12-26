function calculate() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(number1) || isNaN(number2)) {
        resultDiv.textContent = 'Please enter valid numbers';
        return;
    }

    let result;
    switch (operator) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                resultDiv.textContent = 'Error: Division by zero';
                return;
            }
            result = number1 / number2;
            break;
        default:
            resultDiv.textContent = 'Invalid operation';
            return;
    }

    resultDiv.textContent = `Result = ${result.toFixed(2)}`;
}
