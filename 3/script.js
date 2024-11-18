const num1= parseInt(prompt("Enter first number:"), 10);
const num2= parseInt(prompt("Enter second number:"), 10);
const num3= parseInt(prompt("Enter third number:"), 10);

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum/3;

document.body.innerHTML = `
<p>Sum: ${sum}</p>
<p>Product: ${product}</p>
<p>Average: ${average}</p>
`;