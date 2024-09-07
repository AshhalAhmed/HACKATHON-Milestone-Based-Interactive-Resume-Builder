// Select the toggle button and skills section elements
const toggleButton = document.getElementById('toggleSkillsButton') as HTMLButtonElement;
const skillsSection = document.getElementById('skillsSection') as HTMLElement;

// Add a class to the toggle button for styling
toggleButton.classList.add('toggle-button');

// Add an event listener to the toggle button to toggle the display of the skills section
toggleButton?.addEventListener('click', () => {
  // Toggle the display of the skills section
  skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';

  // Update the text of the toggle button based on the display state of the skills section
  toggleButton.textContent = skillsSection.style.display === 'block' ? 'Hide Skills' : 'Show Skills';

  // Toggle the active class on the toggle button to indicate whether the skills section is displayed or not
  toggleButton.classList.toggle('active');
});


