document.addEventListener('DOMContentLoaded', () => {
    // Tab Switching Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding content
            const targetId = btn.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Modal Logic for Media (Certificates/Diplomas)
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('expandedImg');
    const span = document.getElementsByClassName('close-modal')[0];

    // Placeholder logic - in real usage, you'd attach click events to images or media-placeholders
    const placeholders = document.querySelectorAll('.media-placeholder');
    placeholders.forEach(ph => {
        ph.addEventListener('click', () => {
            // In a fully filled site, you'd set modalImg.src = path_to_image
            // Here we just show an alert since no real images are linked yet
            // modal.style.display = "block";
            // modalImg.src = "assets/images/placeholder_diploma.png"; 
        });
    });

    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
