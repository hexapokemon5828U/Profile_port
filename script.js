function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show the clicked section
    document.getElementById(sectionId).classList.remove('hidden');
}

// Show the "About" section by default
window.onload = function() {
    showSection('about');
};
