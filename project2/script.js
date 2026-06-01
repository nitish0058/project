
function showSection(sectionId) {

    let sections = document.querySelectorAll('.content-section');

    sections.forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
}

function logout() {
    alert('Logged out successfully!');
}

// Save sample data in local storage
localStorage.setItem('studentName', 'Nitish Kumar');

console.log('Student Name:', localStorage.getItem('studentName'));


