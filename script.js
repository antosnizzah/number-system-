function validateAndConvert() {
    const inputNumber = document.getElementById('input-number').value;
    const inputBase = document.getElementById('input-base').value;

    // Clear previous output if the input is empty
    if (inputNumber === '') {
        updateOutput(0, 0, 0, 0);
        return;
    }

    // Validate the number for the selected base
    if (!isValidForBase(inputNumber, inputBase)) {
        alert('Invalid number for the selected base');
        return;
    }

    // Convert the number to decimal
    const decimalNumber = parseInt(inputNumber, inputBase);

    // Update the outputs for all bases
    updateOutput(decimalNumber.toString(2), decimalNumber.toString(8), decimalNumber.toString(10), decimalNumber.toString(16).toUpperCase());
}

function isValidForBase(number, base) {
    const basePatterns = {
        '2': /^[01]+$/,         // Binary: only 0 or 1
        '8': /^[0-7]+$/,         // Octal: digits 0-7
        '10': /^\d+$/,           // Decimal: digits 0-9
        '16': /^[0-9A-Fa-f]+$/   // Hexadecimal: digits 0-9 and letters A-F
    };
    
    return basePatterns[base].test(number);
}

function updateOutput(binary, octal, decimal, hex) {
    document.getElementById('binary-output').textContent = binary;
    document.getElementById('octal-output').textContent = octal;
    document.getElementById('decimal-output').textContent = decimal;
    document.getElementById('hex-output').textContent = hex;
}
