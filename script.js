document.addEventListener('DOMContentLoaded', function() {
//BOTON ELEMENTOS
    const createElementsButton = document.getElementById('create-elements');
    const dynamicElementsContainer = document.getElementById('dynamic-elements-container');
    let elementsVisible = false;

    // Array de nombres de los elementos
    const elementNames = ['Inicio', 'Productos', 'Trámites', 'Sorteos', 'Sobre Nosotros'];

    createElementsButton.addEventListener('click', function () {
        if (elementsVisible) {
            dynamicElementsContainer.innerHTML = ''; // Limpiar elementos existentes
            createElementsButton.textContent = 'Mostrar Elementos'; // Cambiar texto del botón a "Mostrar Elementos"
        } else {
            for (let i = 0; i < elementNames.length; i++) {
                const newElement = document.createElement('div');
                newElement.className = 'dynamic-element';
                newElement.textContent = elementNames[i]; // Asignar el nombre del elemento desde el array
                dynamicElementsContainer.appendChild(newElement);
            }
            createElementsButton.textContent = 'Ocultar Elementos'; // Cambiar texto del botón a "Ocultar Elementos"
        }
        elementsVisible = !elementsVisible;
    });

    // CARRUSEL
    const carousel = document.querySelector('#carouselExample');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevButton = carousel.querySelector('.carousel-control-prev');
    const nextButton = carousel.querySelector('.carousel-control-next');

    let currentIndex = 0;

    function showSlide(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    var buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            var myModal = new bootstrap.Modal(document.getElementById('exampleModalToggle'));
            myModal.show();
        });
    });

    
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 1000) {
        document.body.style.backgroundColor = '#e0e0e0';
    } else {
        document.body.style.backgroundColor = 'white';
    }

/// Función para mostrar el footer cuando se hace scroll
function mostrarFooter() {
    var footer = document.getElementById('footer');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.clientHeight;

    // Calcular cuándo mostrar el footer
    if (scrollPosition + windowHeight >= documentHeight) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
}

// Evento de scroll para llamar a la función
window.addEventListener('scroll', mostrarFooter);    
});

document.querySelectorAll('.card-container').forEach(container => {
    container.addEventListener('click', () => {
        container.classList.toggle('flipped');
        const card = container.querySelector('.card');
        card.classList.toggle('flipped');

        if (container.classList.contains('flipped')) {
            // Scroll to the bottom of the page
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    });
});

//KeyPress Event
document.addEventListener('keypress', function(event) {
    const key = event.key.toLowerCase();
    if (key === 'm') {
        document.getElementById('create-elements').click();
    } else if (key === 'c') {
        const carousel = document.getElementById('carouselExample');
        carousel.scrollIntoView({ behavior: 'smooth' });

        // Ajustar la posición unos -100 píxeles después de un pequeño retraso
        setTimeout(function() {
            window.scrollBy({ top: -100, behavior: 'smooth' });
        }, 500); // 500ms de retraso para permitir que el scroll inicial se complete
    } else if (key === 'i') {
        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    } else if (key === 'p') {
        document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
    } else if (key === 'f') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
});
