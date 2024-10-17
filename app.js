// Handle form submission for loan application
document.getElementById('loanForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        amount: document.getElementById('amount').value,
        loanType: document.getElementById('loanType').value,
    };
    
    // Send data to the backend (Assumed API endpoint: /api/loan/apply)
    fetch('/api/loan/apply', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        alert('Loan application submitted! Application ID: ' + data.applicationId);
    })
    .catch(error => console.error('Error:', error));
});

// Handle loan status check
document.getElementById('statusForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const applicationId = document.getElementById('applicationId').value;
    
    // Fetch loan status (Assumed API endpoint: /api/loan/status)
    fetch(`/api/loan/status?applicationId=${applicationId}`)
    .then(response => response.json())
    .then(data => {
        alert('Loan Status: ' + data.status);
    })
    .catch(error => console.error('Error:', error));
});
