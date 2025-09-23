document.querySelector('form').addEventListener('submit', function (event) {
    const price = document.getElementById('current-price').value;
    const data = document.getElementById('data-amount').value;
    const phone = document.getElementById('phone').value;

    if (price < 0) {
        alert('Price cannot be negative!');
        event.preventDefault();
        return;
    }
    if (data < 0) {
        alert('Data amount cannot be negative!');
        event.preventDefault();
        return;
    }
    if (!phone.match(/^\+?\d{7,15}$/)) {
        alert('Please enter a valid phone number (7-15 digits).');
        event.preventDefault();
        return;
    }
});