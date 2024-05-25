// Adiciona um evento de clique para os links do menu
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                // Suaviza a rolagem até o elemento alvo
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});
