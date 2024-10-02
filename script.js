function convertNumber() {
    const inputNumber = document.getElementById('input-number').value;
    const inputBase = document.getElementById('input-base').value;

    if (inputNumber === '') {
        alert('Please enter a number');
        return;
    }

    // Convert the input number to a decimal number
    const decimalNumber = parseInt(inputNumber, inputBase);

    if (isNaN(decimalNumber)) {
        alert('Invalid number for the selected base');
        return;
    }

    // Display converted values
    document.getElementById('binary-output').textContent = decimalNumber.toString(2);
    document.getElementById('octal-output').textContent = decimalNumber.toString(8);
    document.getElementById('decimal-output').textContent = decimalNumber.toString(10);
    document.getElementById('hex-output').textContent = decimalNumber.toString(16).toUpperCase();
}
