
// Get elements by their IDs
const toggleButton = document.getElementById('toggleBtn') as HTMLButtonElement;
const skillssection = document.getElementById('skills') as HTMLElement;
const printCVBtn = document.getElementById('Print-CV') as HTMLButtonElement;


toggleButton.addEventListener('click', (event) => {
   event.preventDefault();         
  if (skillssection.style.display === 'none') {
    skillssection.style.display = 'block';
    toggleButton.textContent = 'Hide Skills';
  } else {
    skillssection.style.display = 'none';
    toggleButton.textContent = 'Show Skills';
  }
});

// Function to show alert on clicking Generate CV button
const showAlert = (): void => {
    alert("Print-CV Function available in 5th Milestone...");
  };
  
  // Add event listener to generate CV button
  printCVBtn.addEventListener("click", (event: Event) => {
    event.preventDefault(); // Prevent default form submission
    showAlert();
  });


  







