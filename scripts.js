// This file contains JavaScript functionality for the web pages. 

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form validation for contact form
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;

            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill in all fields.');
            } else {
                alert('Thank you for your message!');
            }
        });
    }

    // Dynamic content loading for projects page
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
        const projects = [
            { title: 'Proyecto 1', description: 'Descripción del Proyecto 1.' },
            { title: 'Proyecto 2', description: 'Descripción del Proyecto 2.' },
            // Add more projects as needed
        ];

        projects.forEach(project => {
            const projectItem = document.createElement('li');
            projectItem.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
            projectsSection.appendChild(projectItem);
        });
    }
});