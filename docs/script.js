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

    // Toast Notification Logic
    window.showToast = function(message) {
        const toast = document.getElementById("toast");
        toast.innerText = message;
        toast.className = "toast show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    };

    // Awards Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const awardCategories = document.querySelectorAll('.award-category');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            awardCategories.forEach(category => {
                if (filterValue === 'all' || category.getAttribute('data-category') === filterValue) {
                    category.style.display = 'block';
                } else {
                    category.style.display = 'none';
                }
            });
        });
    });
});

// Collapsible Categories Logic
window.toggleCategory = function(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');
    if (content.style.display === 'none') {
        content.style.display = 'block';
        icon.innerHTML = '&#9660;'; // down arrow
    } else {
        content.style.display = 'none';
        icon.innerHTML = '&#9654;'; // right arrow
    }
};
