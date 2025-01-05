// Coordenadas da localização
var latitude = -23.45694904534036;
var longitude = -45.083017187447076;

// Inicializar o mapa com o arraste desativado
var map = L.map('map', { dragging: false, scrollWheelZoom: false }).setView([latitude, longitude], 15);

// Adicionar camada do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adicionar marcador ao mapa
var marker = L.marker([latitude, longitude]).addTo(map);

// Adicionar popup ao marcador
marker.bindPopup(`
        <div style="text-align: center;">
            <b>Ubatuba House</b><br/>
            Casa da Vera!<br/>
            Rua Santos, 434, Estufa II<br/>Ubatuba-SP<br/>
            <button onclick="openMapsApp(${latitude}, ${longitude})" 
                    class="btn btn-primary btn-sm mt-2">
                Navegar
            </button>
        </div>
    `).openPopup();

// Função para abrir o aplicativo de mapas
function openMapsApp(lat, lon) {
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var url = isIOS ? `maps://?q=${lat},${lon}` : `https://www.google.com/maps?q=${lat},${lon}`;
    window.location.href = url;
}

// Criar botão de controle personalizado
var dragControl = L.control({ position: 'bottomleft' }); // Posição no canto superior direito

dragControl.onAdd = function () {
    var div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
    div.innerHTML = '<button id="toggle-drag" class="btn btn-primary btn-sm">Liberar Arraste</button>';
    div.style.backgroundColor = 'white';
    div.style.padding = '5px';
    div.style.cursor = 'pointer';
    return div;
};

dragControl.addTo(map);

// Função para alternar o arraste do mapa
var isDraggingEnabled = false; // Inicialmente, o arraste está desativado
document.getElementById('toggle-drag').addEventListener('click', function () {
    if (isDraggingEnabled) {
        map.dragging.disable();
        this.textContent = 'Liberar Arraste';
        isDraggingEnabled = false;
    } else {
        map.dragging.enable();
        this.textContent = 'Bloquear Arraste';
        isDraggingEnabled = true;
    }
});