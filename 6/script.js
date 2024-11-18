const startYear = parseInt(prompt("Enter the start year:"), 10);
const endYear = parseInt(prompt("Enter the end year:"), 10);
let leapYears = "<ul>";

for (let year = startYear; year <= endYear; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    leapYears += `<li>${year}</li>`;
  }
}
leapYears += "</ul>";

document.body.innerHTML = leapYears;