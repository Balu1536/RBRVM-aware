document.getElementById('deposit-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const code = document.getElementById('code').value.trim();
    const upi = document.getElementById('upi').value.trim();
    const message = document.getElementById('message');

    if (!code || !upi) {
        message.style.color = 'red';
        message.textContent = 'Please fill in all fields.';
        return;
    }

    // Simulate successful deposit (replace this with actual API integration if needed)
    setTimeout(() => {
        message.style.color = 'green';
        message.textContent = `Supercoins successfully deposited to UPI ID: ${upi}`;
        document.getElementById('deposit-form').reset();
    }, 1000);
});
