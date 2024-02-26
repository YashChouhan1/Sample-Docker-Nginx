document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('employeeForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(event.target);

        // Convert form data to query string
        const params = new URLSearchParams(formData).toString();

        // Make API request to backend servlet
        fetch('http://localhost:8080/all?' + params, {
            method: 'GET',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to submit form');
            }
            return response.json();
        })
        .then(data => {
            console.log('Form submitted successfully');
            // Optionally, display a success message to the user

            // Print the data to the console
            console.log('Data stored in database:', data);
            alert('Form submitted successfully');

            // Redirect to a new page and pass the data as a URL parameter
            window.location.href = 'success.html?data=' + JSON.stringify(data);
      
        })
        .catch(error => {
            console.error('Error:', error);
            // Optionally, display an error message to the user
            alert('Failed to submit form');
        });
    });
});
