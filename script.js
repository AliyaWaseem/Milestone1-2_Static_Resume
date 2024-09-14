// Get elements by their IDs
var toggleButton = document.getElementById('toggleBtn');
var skillssection = document.getElementById('skills');
var printCVBtn = document.getElementById('Print-CV');
toggleButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (skillssection.style.display === 'none') {
        skillssection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        skillssection.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
});
// Function to show alert on clicking Generate CV button
var showAlert = function () {
    alert("Print-CV Function available in 5th Milestone...");
};
// Add event listener to generate CV button
printCVBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission
    showAlert();
});
