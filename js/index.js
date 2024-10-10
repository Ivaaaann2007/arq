document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "https://http2.mlstatic.com/D_NQ_718933-MLA78559920115_082024-OO.webp",
        "https://http2.mlstatic.com/D_NQ_960904-MLA79756679775_102024-OO.webp",
        "https://http2.mlstatic.com/D_NQ_638185-MLA79756595751_102024-F.webp",
        "https://http2.mlstatic.com/D_NQ_682134-MLA79756629007_102024-F.webp"
    ];

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const bannerImage = document.querySelector('.banner img'); // Selecciona la imagen del banner
    let currentIndex = 0;

    function updateCarousel() {
        // Actualiza la imagen del banner según el índice actual
        bannerImage.src = images[currentIndex];
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < images.length - 1) { // Cambia el límite a la longitud del array
            currentIndex++;
            updateCarousel();
        }
    });

    updateCarousel(); // Inicializa la imagen del carrusel al cargar
});
