document.addEventListener('DOMContentLoaded', function () {
    // making sure the users name is stored
    const storedName = localStorage.getItem('userName');
    const greetingContainer = document.getElementById('greeting-container');
    const nameForm = document.getElementById('name-form');
    const clearButton = document.getElementById('clear-button');

    // Display personalized greeting
    if (storedName) {
        greetingContainer.textContent = `Hello, ${storedName}!`;
    } else {
        greetingContainer.textContent = 'Welcome Back! Please enter your full name.';
    }

    // To handle the submit event
    nameForm.addEventListener('submit', (event)=>{
        event.preventDefault();

        // getting the name from the input
        const enteredName = document.getElementById('name').value;

        // saving the name in local storage
        localStorage.setItem('userName' enteredName);

        // displaying a personalized greeting
        greetingContainer.textContent = `Hello, ${enteredName}! Welcome to my greeting app.`;
        greetingContainer.style.color = 'Purple';
    });

    // handling the clear button
    clearButton.addEventListener('click', ()=>{
        // clearing the stored name
        localStorage.removeItem('userName');

        // updating the greeting message
        greetingContainer.innerHTML = 'Name Deleted! Please enter another name you will like me to greet.';
        greetingContainer.style.color = 'rgb(179, 170, 162)';
    });
});
