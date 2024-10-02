document.getElementById('insurance-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formDetails = document.getElementById('form-details').value;

    const response = await fetch('http://127.0.0.1:5000/formfill', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ form_details: formDetails }),
    });

    const result = await response.json();
    document.getElementById('filled-form').textContent = result.filled_form;
});
