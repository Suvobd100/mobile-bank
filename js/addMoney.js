
function getInputValue(id) {
    const inputElement = document.getElementById(id);
    return inputElement.value.trim(); // Return trimmed value
}

// add money click event 
document.getElementById('btn-addMoney').addEventListener('click',function () {

    // Get input values
    const inputAmount = Number(getInputValue('id-amount'));
    const password = getInputValue('id-password');
    const balanceDisplay = document.getElementById('balance-id');

    // Validate the amount input
    if (isNaN(inputAmount) || inputAmount < 0) {
        alert('Invalid Input: Amount must be a non-negative number.'); 
        document.getElementById('id-amount').value = ''; // Clear the input field
        return; 
    }

    // Validate the password
    if (password !== '1234') {
        alert('Invalid Input: Password is incorrect.'); 
        return;
    }

    // Calculate the new balance
    const currentBalance = Number(balanceDisplay.innerText);
    const newBalance = inputAmount + currentBalance;

    // Update the balance display
    balanceDisplay.innerText = newBalance;
    // Optionally clear the amount input after successful submission
    document.getElementById('id-amount').value = '';
})