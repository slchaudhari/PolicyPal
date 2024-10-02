const response = await fetch('https://your-app-name.onrender.com/formfill', {  // Use the Render-provided URL
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ form_details: formDetails }),
});
