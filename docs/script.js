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
    const captionText = document.getElementById('caption');
    const span = document.getElementsByClassName('close-modal')[0];

    // Expose openModal to the global window object so onclick attributes can use it
    window.openModal = function(imgSrc, caption = '') {
        modal.style.display = "block";
        modalImg.src = imgSrc;
        captionText.innerHTML = caption;
    };

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
