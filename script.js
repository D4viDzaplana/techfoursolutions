// Menu Hamburguer
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Carrossel de Fotos
const photos = [
    'IMAGEM/imagem5.jpg',
    'IMAGEM/imagem6.jpg',
    'IMAGEM/imagem7.jpg',
    'IMAGEM/imagem8.jpg',
    'IMAGEM/imagem9.jpg',
    'IMAGEM/imagem10.jpg'
];

const photoElement = document.querySelector('.carousel-photo');
let currentPhotoIndex = 0;

const updatePhoto = () => {
    if (photoElement) {
        photoElement.src = photos[currentPhotoIndex];
    }
};

document.getElementById('next').addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updatePhoto();
});

document.getElementById('prev').addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    updatePhoto();
});

// Inicializa o carrossel com a primeira foto
updatePhoto();
