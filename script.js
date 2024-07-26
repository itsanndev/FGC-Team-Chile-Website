// OBSERVER: Encargado de "observar" en que seccion HTML se encuentra el usuario, con el fin de actualizar la navbar.
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');

                        // Actualizar la URL con el fragmento de la sección activa
                        const newUrl = `#${entry.target.id}`;
                        if (window.location.hash !== newUrl) {
                            window.history.replaceState({}, '', newUrl);
                        }
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Añadir evento click a los enlaces de la NAVBAR
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll suave a la sección objetivo
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Actualizar la URL con el fragmento
            window.history.pushState({}, '', `#${targetId}`);
        });
    });
});

// TRAYECTORIA SECTION
const titles = ["Washington D.C 2017", "Ciudad de Mexico 2018", "Dúbai 2019", "Virtual 2020", "Virtual 2021", "Ginebra 2022", "Singapur 2023"];
const paragraphs = [
    "El equipo chileno debutó en la prestigiosa competencia FIRST Global Challenge, estableciendo nuevas bases para el desarrollo y crecimiento del interés nacional en la robótica. Su participación inaugural fomentó un espíritu de colaboración y perseverancia, inspirando a futuras generaciones de jóvenes entusiastas de la robótica en todo el país.",
    "En Ciudad de México, la selección nacional demostró su capacidad para innovar y financiar sus proyectos. Este reconocimiento destacó sus sobresalientes esfuerzos en la recaudación de fondos, permitiéndoles avanzar y mejorar continuamente, mostrando una dedicación inquebrantable y creatividad en cada paso del camino.",
    "La participación en Dubái fue un hito significativo para el equipo chileno, destacando nuevamente su habilidad para movilizar recursos. Este logro reafirmó su compromiso con la excelencia en la robótica, demostrando su capacidad para superar desafíos financieros y continuar innovando.",
    "Debido a la pandemia, la competencia se llevó a cabo de manera virtual. El equipo chileno se destacó enormemente, obteniendo reconocimientos por su destreza técnica, su capacidad para colaborar a nivel internacional y el liderazgo ejemplar de sus mentores, reflejando su excelencia y compromiso en todos los aspectos de la competencia.",
    "El año 2021, nuevamente en un formato virtual, vio al equipo chileno alcanzar nuevos éxitos. Obtuvieron reconocimientos que consolidaron su posición como líderes en la categoría económica, demostrando innovación y eficiencia en sus proyectos, y reafirmando su compromiso con la cooperación y el espíritu altruista de la competencia.",
    "En 2022, el equipo viajó a Ginebra, donde continuaron acumulando éxitos. Recibieron reconocimientos que subrayaron su enfoque en la seguridad, la colaboración internacional y el liderazgo inspirador, destacando su compromiso con la excelencia y su capacidad para trabajar de manera segura y colaborativa.",
    "En 2023, el equipo chileno se destacó por su uso eficaz de las redes sociales y su compromiso con la seguridad, logrando reconocimientos significativos. Estos logros demostraron su capacidad para sobresalir en diversos aspectos de la competencia, mostrando creatividad y dedicación en cada iniciativa."
];

const achievements = [
    {title: "", description: ""},
    {title: "Mansa Musa Award for Fundraising", description: "Este premio reconoce a los equipos que han demostrado un esfuerzo significativo y honesto en la recaudación de fondos para participar en FIRST Global Challenge. Valora la dedicación, creatividad y persistencia en actividades como eventos comunitarios y campañas, asegurando el financiamiento necesario para cubrir los costos de la competencia."},
    {title: "Mansa Musa Award for Fundraising", description: "Este premio reconoce a los equipos que han demostrado un esfuerzo significativo y honesto en la recaudación de fondos para participar en FIRST Global Challenge. Valora la dedicación, creatividad y persistencia en actividades como eventos comunitarios y campañas, asegurando el financiamiento necesario para cubrir los costos de la competencia."},
    {title: "FIRST Global Challenge Award - 2nd Place", description: "Este premio reconoce al equipo que obtuvo el segundo lugar en la competencia, destacándose por su desempeño en el diseño y operación del robot, resolución de problemas, y colaboración en equipo. Es un reconocimiento a su excelencia y dedicación."},
    {title: "FIRST Global Grand Award - Economy Category 1st Place", description: "Este premio se otorga a los equipos que obtienen la mayor cantidad de puntos de clasificación, basados en su récord de victorias, derrotas y empates. Reconoce el rendimiento sobresaliente del equipo en la competencia, destacando su habilidad para ganar partidas y acumular puntos consistentemente en la categoría de economía"},
    {title: "Sofia Kovalevshaya Award for International Journey", description: "Otorgado a los equipos que documentaron y compartieron su experiencia en FIRST Global con el resto de la comunidad de FIRST Global."},
    {title: "Social Media Challenge", description: "Premia los equipos que utilizan eficazmente las redes sociales para promover sus actividades, compartir sus logros y aumentar la visibilidad de la competencia. Este reconocimiento destaca la creatividad, el alcance y el impacto positivo del equipo en la comunidad en línea."}
];

const achievements2 = [
    {title: "", description: ""},
    {title: "", description: ""},
    {title: "", description: ""},
    {title: "Sofia Kovalevshaya Award for International Journey", description: "Otorgado a los equipos que documentaron y compartieron su experiencia en FIRST Global con el resto de la comunidad de FIRST Global."},
    {title: "FIRST Global Challenge Award - Economy Category 3rd Place", description: "Este premio se otorga a los equipos que obtienen la mayor cantidad de puntos de clasificación, basados en su récord de victorias, derrotas y empates. Reconoce el rendimiento sobresaliente del equipo en la competencia, destacando su habilidad para ganar partidas y acumular puntos consistentemente en la categoría de economía"},
    {title: "Outstanding Mentor", description: "Otorgado a los mentores que fueron mas alla del deber para su equipo"},
    {title: "Safety Award - 3 Stars", description: "Reconoce a los equipos que han demostrado un compromiso excepcional con la seguridad en sus operaciones y prácticas durante la competencia. La distinción de 3 estrellas indica el más alto nivel de cumplimiento con las normas de seguridad, destacando su dedicación a crear un entorno seguro para todos los participantes."}
];

const achievements3 = [
    {title: "", description: ""},
    {title: "", description: ""},
    {title: "", description: ""},
    {title: "Outstanding Mentor", description: "Otorgado a los mentores que fueron mas alla del deber para su equipo"},
    {title: "", description: ""},
    {title: "Safety Award - 3 Stars", description: "Reconoce a los equipos que han demostrado un compromiso excepcional con la seguridad en sus operaciones y prácticas durante la competencia. La distinción de 3 estrellas indica el más alto nivel de cumplimiento con las normas de seguridad, destacando su dedicación a crear un entorno seguro para todos los participantes."},
    {title: "", description: ""}
];

const backgroundImages = [
    {img1: "images/trajectory/2017/foto-1.jpg", img2: "", img3: "", img4: "", img5: ""},
    {img1: "images/trajectory/2018/foto-1.jpg", img2: "images/trajectory/2018/foto-2.jpg", img3: "images/trajectory/2018/foto-3.jpg", img4: "images/trajectory/2018/foto-4.jpg", img5: "images/trajectory/2018/foto-5.jpg"},
    {img1: "images/trajectory/2019/foto-1.jpg", img2: "images/trajectory/2019/foto-2.jpg", img3: "images/trajectory/2019/foto-3.jpg", img4: "images/trajectory/2019/foto-4.jpg", img5: ""},
    {img1: "images/trajectory/2020/foto-1.jpg", img2: "images/trajectory/2020/foto-2.jpg", img3: "images/trajectory/2020/foto-3.jpg", img4: "", img5: ""},
    {img1: "images/trajectory/2021/foto-1.jpg", img2: "images/trajectory/2021/foto-2.jpg", img3: "", img4: "", img5: ""},
    {img1: "images/trajectory/2022/foto-1.jpg", img2: "images/trajectory/2022/foto-2.jpg", img3: "", img4: "", img5: ""},
    {img1: "images/trajectory/2023/foto-1.jpg", img2: "images/trajectory/2023/foto-2.jpg", img3: "", img4: "", img5: ""}
];

let currentIndex = 0;
let currentImageIndex = 0;

function changeContent(index) {
    currentImageIndex = 0; // Resetea la imagen para tener la num1 en el siguiente año
    updateImage(index, currentImageIndex);
    document.getElementById("title").innerText = titles[index];
    document.getElementById("paragraph").innerText = paragraphs[index];
    document.getElementById("achievement-title").innerText = achievements[index].title;
    document.getElementById("achievement-description").innerText = achievements[index].description;
    document.getElementById("achievement-title2").innerText = achievements2[index].title;
    document.getElementById("achievement-description2").innerText = achievements2[index].description;
    document.getElementById("achievement-title3").innerText = achievements3[index].title;
    document.getElementById("achievement-description3").innerText = achievements3[index].description;

    document.querySelectorAll('.timeline-item').forEach((item, idx) => {
        item.classList.toggle('active', idx === index);
    });
}

document.querySelectorAll('.timeline-item').forEach((item) => {
    item.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        currentIndex = index;
        changeContent(index);
    });
});

changeContent(currentIndex);

// Actualiza imagen evaluando año e index
function updateImage(yearIndex, imageIndex) {
    const images = Object.values(backgroundImages[yearIndex]).filter(img => img); // Filtrar imágenes no vacías
    const imgElement = document.querySelector('#img');

    currentImageIndex = (imageIndex + images.length) % images.length; // Ajustar índice para ciclo infinito
    imgElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

function showNextImage() {
    updateImage(currentIndex, currentImageIndex + 1);
}

function showPreviousImage() {
    updateImage(currentIndex, currentImageIndex - 1);
}

document.getElementById('left-arrow-image-selector').addEventListener('click', () => {
    showPreviousImage();
    resetAutoImageChange();
});

document.getElementById('right-arrow-image-selector').addEventListener('click', () => {
    showNextImage();
    resetAutoImageChange();
});

// Cambiar automáticamente cada 10 segundos
let autoImageChangeInterval = setInterval(showNextImage, 10000);

function resetAutoImageChange() {
    clearInterval(autoImageChangeInterval);
    autoImageChangeInterval = setInterval(showNextImage, 10000);
}

// Inicializar la primera imagen
updateImage(currentIndex, currentImageIndex);





// HONOREES SECTION
const honorees = [
    {name: "Rocío Saez", role: "Mentora del Team Chile", description: "Rocío Sáez mentora del Team Chile en FIRST Global Challenge por segundo año consecutivo. Participó en 2021(Virtual) y 2022 (Suiza). Es titulada en Técnico en Electrónica y actualmente estudia Técnico en Automatización y Robótica. Es una comprometida activista en el ámbito STEAM. Además fue destacada por Evolución Tp en Inacap, ademas reconocida  por el programa Luksic-Más Mujeres en STEM.", imageUrl: "images/honorees/rocio-saez.jpg"},
    {name: "Marcelo Bravo", role: "Representante Nacional FIRST Global Challenge", description: "Marcelo Bravo es profesor de electrónica con 15 años de trayectoria en la enseñanza. Ingeniero Electrónico, Magister en educación, ha dedicado gran parte de su carrera a formar jóvenes en el ámbito de la electrónica y la robótica. Su vasta experiencia y pasión por la educación tecnológica lo convierten en una pieza clave en el desarrollo y éxito del equipo de robótica.", imageUrl: "images/honorees/marcelo-bravo.jpg"}
];

let currentHonoreeIndex = 0;

function updateHonoree(index) {
    const honoree = honorees[index];

    const nameElement = document.getElementById('honoree-name');
    const roleElement = document.getElementById('honoree-role');
    const descriptionElement = document.getElementById('honoree-description');
    const imgElement = document.getElementById('honoree-img');

    setTimeout(() => {
        nameElement.textContent = honoree.name;
        roleElement.textContent = honoree.role;
        descriptionElement.textContent = honoree.description;
        imgElement.style.backgroundImage = `url(${honoree.imageUrl})`;
    }, 300);
}

function showNextHonoree() {
    currentHonoreeIndex = (currentHonoreeIndex < honorees.length - 1) ? currentHonoreeIndex + 1 : 0;
    updateHonoree(currentHonoreeIndex);
}

function showPreviousHonoree() {
    currentHonoreeIndex = (currentHonoreeIndex > 0) ? currentHonoreeIndex - 1 : honorees.length - 1;
    updateHonoree(currentHonoreeIndex);
}

document.getElementById('left-arrow').addEventListener('click', () => {
    showPreviousHonoree();
    resetAutoChange();
});

document.getElementById('right-arrow').addEventListener('click', () => {
    showNextHonoree();
    resetAutoChange();
});

// Inicializar la primera mención
updateHonoree(currentHonoreeIndex);

// Cambiar automáticamente cada 10 segundos
let autoChangeInterval = setInterval(showNextHonoree, 10000);

function resetAutoChange() {
    clearInterval(autoChangeInterval);
    autoChangeInterval = setInterval(showNextHonoree, 10000);
}