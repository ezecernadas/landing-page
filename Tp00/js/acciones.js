document.querySelectorAll(".tarjeta").forEach((tarjeta) => {
    tarjeta.addEventListener("click", function () {
        // Agrega la animación de sacudida
        this.classList.add("shake");

        setTimeout(() => {
            this.classList.remove("shake");
        }, 300);

        // 🎉 Dispara el confeti en la posición de la tarjeta
        let rect = this.getBoundingClientRect();
        confetti({
            particleCount: 50, // Cantidad de confeti
            spread: 50, // Ángulo de dispersión
            origin: {
                x: (rect.left + rect.width / 2) / window.innerWidth, // Posición X
                y: (rect.top + rect.height / 2) / window.innerHeight // Posición Y
            }
        });
    });
});
