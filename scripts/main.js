document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('no-button');

    noButton.addEventListener('mouseover', function() {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.transform = `translate(${x}px, ${y}px)`;
    });
});