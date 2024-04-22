document.addEventListener('DOMContentLoaded', function () {
    // making sure the users name is stored
    const storedName = localStorage.getItem('userName');
    const greetingContainer = document.getElementById('greeting-container');
    const nameForm = document.getElementById('name-form');
    const clearButton = document.getElementById('clear-button');
    const nameInput = document.getElementById('name'); // Get the input field element

    // Display personalized greeting
    if (storedName) {
        greetingContainer.textContent = `Hello, ${storedName}!`;
        clearButton.style.display = 'inline-block'; // Show clear button
    } else {
        greetingContainer.textContent = 'Welcome Back! Please enter your full name.';
        clearButton.style.display = 'none'; // Hide clear button
    }

    // To handle the submit event
    nameForm.addEventListener('submit', (event)=>{
        event.preventDefault();

        // getting the name from the input
        const enteredName = nameInput.value;

        // saving the name in local storage
        localStorage.setItem('userName', enteredName);

        // displaying a personalized greeting
        greetingContainer.textContent = `Hello, ${enteredName}! Welcome to my greeting app.`;
        greetingContainer.style.color = 'Purple';

        // Show clear button
        clearButton.style.display = 'inline-block';

        // Clear the form after submitting
        nameInput.value = ''; // Reset input field value to empty string
    });

    // handling the clear button
    clearButton.addEventListener('click', ()=>{
        // clearing the stored name
        localStorage.removeItem('userName');

        // updating the greeting message
        greetingContainer.innerHTML = 'Name Cleared! Please enter another name you will like me to greet.';
        greetingContainer.style.color = 'rgb(179, 170, 162)';

        // Hide clear button
        clearButton.style.display = 'none';
    });
});
