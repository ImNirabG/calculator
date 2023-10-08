const form = document.querySelector('form');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultElement = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    let result;

    switch (event.target.name) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
    }

    resultElement.textContent = result;
});
