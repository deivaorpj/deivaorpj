// Dados dinâmicos
const cards = [
    { title: "Casa na Praia", description: "Uma bela casa à beira-mar com 3 quartos." },
    { title: "Chalé nas Montanhas", description: "Perfeito para relaxar e curtir a natureza." },
    { title: "Apartamento Urbano", description: "No centro da cidade, próximo a tudo." },
    { title: "Casa de Campo", description: "Ideal para quem busca tranquilidade." },
    { title: "Loft Moderno", description: "Design único em um espaço aconchegante." },
    { title: "Cabana Rústica", description: "Um refúgio em meio à floresta." },
];

// Função para criar carrossel grande
function createLargeCarousel(cards) {
    const carouselLargeContent = document.getElementById("carouselLargeContent");
    cards.forEach((card, index) => {
        if (index % 4 === 0) {
            const carouselItem = document.createElement("div");
            carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`;
            carouselItem.innerHTML = `<div class="row"></div>`;
            carouselLargeContent.appendChild(carouselItem);
        }
        const row = carouselLargeContent.lastElementChild;
        row.innerHTML += `
            <div class="col-lg-3 col-md-6 col-12">
                <div class="card text-center" style="min-height:300px">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.description}</p>
                    </div>
                </div>
            </div>`;
    });
}

// Função para criar carrossel pequeno
function createSmallCarousel(cards) {
    const carouselSmallContent = document.getElementById("carouselSmallContent");
    cards.forEach((card, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`;
        carouselItem.innerHTML = `
            <div class="card" style="min-height:200px">
                <div class="card-body align-items-center justify-content-center">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.description}</p>
                </div>
            </div>`;
        carouselSmallContent.appendChild(carouselItem);
    });
}

// Inicializar carrosséis
createLargeCarousel(cards);
createSmallCarousel(cards);
