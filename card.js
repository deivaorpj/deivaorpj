// Dados dinâmicos
const cards = [
    { title: "Descrição geral da casa", description: "casa mobiliada, equipada, com todos os utensílios de cozinha. uma casa super confortável para desfrutar em familia ou mesmo com amigos, pois dispõe de 3 quartos, sendo uma suí­te, sala, cozinha, um quintal amplo, com 3 vagas de garagem. internet free e 1 smart tv." },
    { title: "Suí­te", description: "na suíte tem uma cama de casal, 3 beliches, ventilador no teto, e o banheiro privativo. ideal para uma familia, quando estiver em amigos." },
    { title: "Quarto 2", description: "no segundo quarto tem uma cama de casal, uma triliche e ventilador no teto." },
    { title: "Quarto 3", description: "o terceiro quarto tem uma cama de casal, uma beliche e ventilador no teto." },
    { title: "Cozinha", description: "A cozinha é toda equipada com utensílios de cozinha, variedades de panelas microondas, louças, 1 geladeira e uma mesa para até 8 pessoas." },
    { title: "Sala", description: "Na sala tem dois sofás sendo um de 2 e de 3 lugares, uma SmartTV, e o ventilador no teto." },
];

// Função para criar carrossel grande
function createLargeCarousel(cards) {
    const carouselLargeContent = document.getElementById("carouselLargeContent");
    let currentRow;

    cards.forEach((card, index) => {
        // Cria um novo item do carrossel a cada 4 cards
        if (index % 4 === 0) {
            const carouselItem = document.createElement("div");
            carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`;
            currentRow = document.createElement("div");
            currentRow.className = "row";
            carouselItem.appendChild(currentRow);
            carouselLargeContent.appendChild(carouselItem);
        }

        // Adiciona o card ao item do carrossel
        const cardElement = document.createElement("div");
        cardElement.className = "col-lg-3 col-md-6 col-12";
        cardElement.innerHTML = `
            <div class="card text-center" style="min-height:300px">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.description}</p>
                </div>
            </div>`;
        currentRow.appendChild(cardElement);
    });
}

// Função para criar carrossel pequeno
function createSmallCarousel(cards) {
    const carouselSmallContent = document.getElementById("carouselSmallContent");

    cards.forEach((card, index) => {
        // Cria um novo item do carrossel para cada card
        const carouselItem = document.createElement("div");
        carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`;
        carouselItem.innerHTML = `
            <div class="card text-center" style="min-height:300px">
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
