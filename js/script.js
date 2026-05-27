// DATOS (AQUÍ PONES TUS LINKS DE HOTMART)
const productos = [
    {
        nombre: "Domina la Anciedad",
        imagen: "img/Captura de pantalla 2026-05-19 203800.png",
        link: "https://go.hotmart.com/C105458941D"
    },
    {
        nombre: "Domina excel, Power BI y mas con IA",
        imagen: "img/ChatGPT Image 24 may 2026, 09_30_58 p.m..png",
        link: "https://go.hotmart.com/C105983420C"
    },
    {
        nombre: "Pierde libras (peso) coiendo rico",
        imagen: "img/hero-meal-BWz3lO8c.jpg",
        link: "https://go.hotmart.com/O105983599I"
    },
    {
        nombre: "Pierde peso y elimina malos habitos",
        imagen: "img/Captura de pantalla 2026-05-24 205025.png",
        link: "https://go.hotmart.com/P105537258V"
    },
    {
        nombre: "Ejercta tu mente",
        imagen: "img/Captura de pantalla 2026-05-19 203800.png",
        link: "https://go.hotmart.com/C105458941D"
    },
    {
        nombre: "Ejercta tu mente",
        imagen: "img/Captura de pantalla 2026-05-19 203800.png",
        link: "https://go.hotmart.com/C105458941D"
    },
    {
        nombre: "Ejercta tu mente",
        imagen: "img/Captura de pantalla 2026-05-19 203800.png",
        link: "https://go.hotmart.com/C105458941D"
    },
    {
        nombre: "Ejercta tu mente",
        imagen: "img/Captura de pantalla 2026-05-19 203800.png",
        link: "https://go.hotmart.com/C105458941D"
    },
    {
        nombre: "Ejercta tu mente",
        imagen: "img/Captura de pantalla 2026-05-19 203800.png",
        link: "https://go.hotmart.com/C105458941D"
    },
    
    
];

// MOSTRAR CATÁLOGO
const catalogo = document.getElementById("catalogo");

productos.forEach(p => {
    catalogo.innerHTML += `
        <div class="card">

            <!-- IMAGEN CLICKEABLE -->
            <img 
                src="${p.imagen}" 
                onclick="ir('${p.link}')"
                style="cursor:pointer;"
            >

            <h3>${p.nombre}</h3>

            <!-- BOTÓN -->
            <button onclick="ir('${p.link}')">
                Ver más
            </button>

        </div>
    `;
});

// REDIRECCIÓN
function ir(link) {
    window.location.href = link;
}

// BUSCADOR INTELIGENTE
const search = document.getElementById("search");
const resultados = document.getElementById("resultados");

search.addEventListener("input", () => {

    let valor = search.value.toLowerCase();

    resultados.innerHTML = "";

    if (valor === "") {
        resultados.style.display = "none";
        return;
    }

    let filtrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(valor)
    );

    filtrados.forEach(p => {

        resultados.innerHTML += `
            <div onclick="ir('${p.link}')">
                ${p.nombre}
            </div>
        `;
    });

    resultados.style.display = "block";
});