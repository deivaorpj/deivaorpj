const images = [
    'imgCima/fachadaBaixo.jpg',
    'imgCima/fachadaBaixo2.jpg',
    'imgCima/frenteBaixo.jpg',
    'imgCima/piscinaBaixo.jpg',
    'imgCima/piscinaBaixo2.jpg',
    'imgCima/estacionamentoBaixo.jpg',
    'imgCima/ducha.jpg',
    'imgCima/salaBaixo.jpg'
    // Adicione mais imagens aqui
];

const imageGallery = document.getElementById('imageGallery');
const modalImage = document.getElementById('modalImage');
const imageCounter = document.getElementById('imageCounter');
let currentIndex = 0;

// Renderizar a galeria
function renderGallery() {
    images.forEach((imagePath, index) => {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-md-4 col-6 mb-2';
        col.innerHTML = `<img src="${imagePath}" class="img-fluid image-thumbnail" 
                            data-index="${index}" alt="Imagem">`;
        imageGallery.appendChild(col);
    });

    addImageClickListeners();
}

// Adicionar evento de clique nas imagens
function addImageClickListeners() {
    document.querySelectorAll('.image-thumbnail').forEach((image, index) => {
        image.addEventListener('click', function () {
            currentIndex = index;
            updateModalImage();
            const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
            imageModal.show();
        });
    });
}

// Atualizar a imagem no modal
function updateModalImage() {
    modalImage.src = images[currentIndex];
    imageCounter.textContent = `Imagem ${currentIndex + 1} de ${images.length}`;
}

// Navegação do carrossel
document.getElementById('prevBtn').addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        updateModalImage();
    }
});

document.getElementById('nextBtn').addEventListener('click', function () {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateModalImage();
    }
});

// Inicializar a galeria
renderGallery();
gCimconst images = [
    'imgCima/fachadaBaixo.jpg',
    'imgCima/fachadaBaixo2.jpg',
    'imgCima/frenteBaixo.jpg',
    'imgCima/piscinaBaixo.jpg',
    'imgCima/piscinaBaixo2.jpg',
    'imgCima/estacionamentoBaixo.jpg',
    'imgCima/ducha.jpg',
    'imgCima/salaBaixo.jpg'
    // Adicione mais imagens aqui
];

const imageGallery = document.getElementById('imageGallery');
const modalImage = document.getElementById('modalImage');
const imageCounter = document.getElementById('imageCounter');
let currentIndex = 0;

// Renderizar a galeria
function renderGallery() {
    images.forEach((imagePath, index) => {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-md-4 col-6 mb-2';
        col.innerHTML = `<img src="${imagePath}" class="img-fluid image-thumbnail" 
                            data-index="${index}" alt="Imagem">`;
        imageGallery.appendChild(col);
    });

    addImageClickListeners();
}

// Adicionar evento de clique nas imagens
function addImageClickListeners() {
    document.querySelectorAll('.image-thumbnail').forEach((image, index) => {
        image.addEventListener('click', function () {
            currentIndex = index;
            updateModalImage();
            const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
            imageModal.show();
        });
    });
}

// Atualizar a imagem no modal
function updateModalImage() {
    modalImage.src = images[currentIndex];
    imageCounter.textContent = `Imagem ${currentIndex + 1} de ${images.length}`;
}

// Navegação do carrossel
document.getElementById('prevBtn').addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        updateModalImage();
    }
});

document.getElementById('nextBtn').addEventListener('click', function () {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateModalImage();
    }
});

// Inicializar a galeria
renderGallery();
a/estacionamentoBaixo.jpg',
    'imgCima/ducha.jpg',
    'imgCima/salaBaixo.jpg'
    // Adicione mais imagens aqui
];

const imageGallery = document.getElementById('imageGallery');
const modalImage = document.getElementById('modalImage');
const imageCounter = document.getElementById('imageCounter');
let currentIndex = 0;

// Renderizar a galeria
function renderGallery() {
    images.forEach((imagePath, index) => {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-md-4 col-6 mb-2';
        col.innerHTML = `<img src="${imagePath}" class="img-fluid image-thumbnail" 
                            data-index="${index}" alt="Imagem">`;
        imageGallery.appendChild(col);
    });

    addImageClickListeners();
}

// Adicionar evento de clique nas imagens
function addImageClickListeners() {
    document.querySelectorAll('.image-thumbnail').forEach((image, index) => {
        image.addEventListener('click', function () {
            currentIndex = index;
            updateModalImage();
            const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
            imageModal.show();
        });
    });
}

// Atualizar a imagem no modal
function updateModalImage() {
    modalImage.src = images[currentIndex];
    imageCounter.textContent = `Imagem ${currentIndex + 1} de ${images.length}`;
}

// Navegação do carrossel
document.getElementById('prevBtn').addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        updateModalImage();
    }
});

document.getElementById('nextBtn').addEventListener('click', function () {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateModalImage();
    }
});

// Inicializar a galeria
renderGallery();
