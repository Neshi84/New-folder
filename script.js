document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const message = document.getElementById('message');

    if (fileInput.files.length === 0) {
        message.textContent = 'Please select a file.';
        return;
    }

    const file = fileInput.files[0];
    if (file.type !== 'text/csv') {
        message.textContent = 'Only CSV files are allowed.';
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    fetch('https://your-api-endpoint.com/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        message.textContent = 'File uploaded successfully!';
        message.style.color = 'green';
    })
    .catch(error => {
        message.textContent = 'An error occurred while uploading the file.';
    });
});
