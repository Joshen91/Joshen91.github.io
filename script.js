document.querySelector('form').addEventListener('submit', function (event) {
    const price = document.getElementById('current-price').value;
    const data = document.getElementById('data-amount').value;
    const phone = document.getElementById('phone').value;

    // Basic validation
    if (price < 0) {
        alert('Price cannot be negative!');
        event.preventDefault(); // Stop form submission
        return;
    }
    if (data < 0) {
        alert('Data amount cannot be negative!');
        event.preventDefault();
        return;
    }
    if (!phone.match(/^\+?\d{7,15}$/)) { // Simple phone number check
        alert('Please enter a valid phone number (7-12 digits).');
        event.preventDefault();
        return;
    }
});