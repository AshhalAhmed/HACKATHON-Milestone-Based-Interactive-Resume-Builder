var toggleButton = document.getElementById('toggleSkillsButton');
var skillsSection = document.getElementById('skillsSection');
toggleButton.classList.add('toggle-button');
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
    skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    toggleButton.textContent = skillsSection.style.display === 'block' ? 'Hide Skills' : 'Show Skills';
    toggleButton.classList.toggle('active');
});
