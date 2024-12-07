// JavaScript to enhance interactivity

// Smooth Scroll
document.querySelectorAll('.navmenu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Dynamic Active Link Highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navmenu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60; // Adjust for fixed navbar
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll to Top Button
const scrollTopButton = document.createElement('div');
scrollTopButton.classList.add('scroll-to-top');
scrollTopButton.innerHTML = '<box-icon name="chevron-up" type="solid"></box-icon>';
document.body.appendChild(scrollTopButton);

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Navbar Hamburger Menu (Optional for smaller screens)
const hamburgerMenu = document.createElement('div');
hamburgerMenu.classList.add('hamburger');
hamburgerMenu.innerHTML = '<box-icon name="menu" type="solid"></box-icon>';
document.querySelector('header').appendChild(hamburgerMenu);

const navMenu = document.querySelector('.navmenu');
hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close nav menu when a link is clicked
document.querySelectorAll('.navmenu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
