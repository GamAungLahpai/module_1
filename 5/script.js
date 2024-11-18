if (confirm("Should I caculate the square root")){
    const number = parseFloat(prompt("Enter a number"));
    if (number < 0) {
        document.body.innerHTML = `<p>The square root of a negative number is not defined </p>`;
    } else {
        const squareRoot = Math.sqrt(number);
        document.body.innerHTML = `<p>The square root of ${number} is ${squareRoot.toFixed(2)}.</p>`;
    }
} else {
    document.body.innerHTML = `<p>The square root is not calculated.</p>`;
}