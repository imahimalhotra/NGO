document.addEventListener("DOMContentLoaded", function () {
    const donateBtn = document.getElementById('donate-btn');
    const modal = document.getElementById('donate-modal');
    const closeBtn = document.querySelector('.close');

    // Open the modal when "Donate Now" is clicked
    donateBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Close the modal when "X" button is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Simple form validation
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();

        if (name === "" || email === "") {
            e.preventDefault();
            alert("Please fill out all fields.");
        } else {
            alert("Thank you for signing up!");
        }
    });
});
