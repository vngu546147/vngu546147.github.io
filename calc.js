function calc() {
    // Get the values of the first and second operands from the input fields
    let value1 = parseFloat(document.getElementById('value1').value);
    let value2 = parseFloat(document.getElementById('value2').value); 
    let operator = document.getElementById('operator').value;             // Get the operator from the dropdown menu
    let result;                                                         // // Declare the result variable  

     // Perform the calculation based on the selected operaton
    if (operator === 'add') {
        result = value1 + value2; //Adding the value
    } else if (operator === 'sub') {
        result = value1 - value2; //Subtracting the value
    } else if (operator === 'multi') {
        result = value1 * value2; //Multiplying the value
    } else if (operator === 'div') {
        if (value2 === 0) {
            alert('Cannot divide by zero'); //Display an error when dividing by zero
            return;
        }
        result = value1 / value2; // dividing
    } else if (operator === 'mod') {
        if (value2 === 0) {
            alert('Cannot mod by zero'); //Display an error message when moding by zero
            return;
        }
        result = value1 % value2; //moding
    } else {
        alert('Invalid operator'); //Display an  error message for invalid operators
        return;
    }

    //Display the result 
    document.getElementById('result').textContent = `Result: ${result}`;
}