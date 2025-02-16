// Rolagem suave ao clicar nos links da navbar
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 60, // Ajuste para navbar fixa
            behavior: 'smooth'
        });
    });
});


