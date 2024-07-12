document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    pages[0].classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const targetId = e.target.getAttribute('data-target');
            const targetPage = document.getElementById(targetId);

            // Hide the current page
            document.querySelector('.page.active').classList.remove('active');

            // Show the target page
            targetPage.classList.add('active');
        });
    });
});

