const year = parseInt(prompt("Enter a year"), 10);
let isLeapyear = false;

if (year% 4 === 0){
    if (year% 100 === 0){
        if(year% 400 === 0){
            isLeapyear = true;
        }
    } else {
        isLeapyear = true;
    }

}
document.body.innerHTML = `<p>${year} is ${isLeapyear ? "" : "not "}a leap year.</p>`;