document.getElementById('apiCallButton').addEventListener('click', function() {
    const apiKey = document.getElementById('apiKey').value;
    const userInput = document.getElementById('userInput').value;

    if (!apiKey) {
        alert('Please enter your API key.');
        return;
    }

    const apiRequestBody = {
        model: "gpt-3.5-turbo-1106",
        messages: [
            {
                role: "system",
                content: "Your predefined system prompt goes here..."
            },
            {
                role: "user",
                content: userInput
            }
        ]
    };

    fetch('https://api.example.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(apiRequestBody)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('apiResponse').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
