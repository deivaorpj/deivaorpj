const images = [
    'imgBaixo/banheiro.jpg',
    'imgBaixo/banheiro2.jpg',
    'imgBaixo/banheiro3.jpg',
    'imgBaixo/banheiro4.jpg',
    'imgBaixo/banheiro5.jpg',
    'imgBaixo/cozinha.jpg',
    'imgBaixo/cozinha2.jpg',
    'imgBaixo/cozinha3.jpg',
    'imgBaixo/fundo.jpg',
    'imgBaixo/fundo2.jpg',
    'imgBaixo/quarto.jpg',
    'imgBaixo/quarto2.jpg',
    'imgBaixo/quarto3.jpg',
    'imgBaixo/quarto4.jpg',
    'imgBaixo/sala.jpg',
    'imgBaixo/suite.jpg',
    'imgBaixo/suite2.jpg',
    'imgBaixo/suite3.jpg',
    'imgBaixo/frenteBaixo.jpg',
    'imgBaixo/piscinaBaixo.jpg',
    'imgBaixo/piscinaBaixo2.jpg',
    'imgBaixo/estacionamentoBaixo.jpg',
    'imgBaixo/ducha.jpg',
    'imgBaixo/salaBaixo.jpg'
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
const imagesPerPage = 8; // Número de imagens por página
let currentPage = 1; // Página inicial

// Renderizar a galeria com base na página atual
function renderGallery() {
    imageGallery.innerHTML = ""; // Limpa a galeria

    // Determina o intervalo de imagens para a página atual
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = Math.min(startIndex + imagesPerPage, images.length);

    for (let i = startIndex; i < endIndex; i++) {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-md-4 col-6 mb-2';
        col.innerHTML = `<img src="${images[i]}" class="img-fluid image-thumbnail" 
                            data-index="${i}" alt="Imagem">`;
        imageGallery.appendChild(col);
    }

    addImageClickListeners();
    renderPaginationControls();
}

// Renderizar os controles de paginação
function renderPaginationControls() {
    const totalPages = Math.ceil(images.length / imagesPerPage); // Total de páginas
    const paginationControls = document.getElementById('paginationControls');
    paginationControls.innerHTML = ""; // Limpa os controles de paginação

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.className = `btn btn-sm mx-1 ${i === currentPage ? "btn-primary" : "btn-outline-primary"}`;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            renderGallery();
        });
        paginationControls.appendChild(pageButton);
    }
}



// Inicializar a galeria
renderGallery();