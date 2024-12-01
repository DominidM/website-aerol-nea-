// main.js
document.addEventListener('DOMContentLoaded', () => {
    // Referencias a elementos del DOM
    const themeToggle = document.querySelector('.theme-toggle');
    const langToggle = document.querySelector('.lang-toggle');
    const navLinks = document.querySelectorAll('.nav-link');

    const sections = document.querySelectorAll('.section');
    const flightSearchForm = document.getElementById('flightSearchForm');
    const contactForm = document.getElementById('contactForm');

    // Función para cambiar el tema
    function toggleTheme() {
        const isDark = document.documentElement.hasAttribute('data-theme');
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    }

    // Función para cambiar el idioma
    function toggleLanguage() {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === 'es' ? 'en' : 'es';
        updateLanguage(newLang);
    }

    // Función para cambiar de sección
    function switchSection(sectionId) {
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }

        // Actualizar navegación activa
        navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Manejar el envío del formulario de búsqueda de vuelos
    function handleFlightSearch(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const searchData = Object.fromEntries(formData.entries());
        
        // Aquí podrías agregar la lógica para buscar vuelos
        console.log('Búsqueda de vuelos:', searchData);
        
        // Ejemplo de feedback visual
        const btn = e.target.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = '✓ Búsqueda realizada';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    }

    // Manejar el envío del formulario de contacto
    function handleContactForm(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const contactData = Object.fromEntries(formData.entries());
        
        // Aquí podrías agregar la lógica para enviar el mensaje
        console.log('Datos de contacto:', contactData);
        
        // Ejemplo de feedback visual
        const btn = e.target.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = '✓ Mensaje enviado';
        setTimeout(() => {
            btn.textContent = originalText;
            e.target.reset();
        }, 2000);
    }

    // Event Listeners
    themeToggle.addEventListener('click', toggleTheme);
    langToggle.addEventListener('click', toggleLanguage);
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            switchSection(sectionId);
            // Actualizar URL sin recargar la página
            history.pushState(null, '', `#${sectionId}`);
        });
    });

    if (flightSearchForm) {
        flightSearchForm.addEventListener('submit', handleFlightSearch);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Manejar navegación con las flechas del navegador
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.substring(1) || 'flights';
        switchSection(hash);
    });

    // Cargar tema preferido del usuario
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Inicializar la sección activa basada en el hash de la URL
    const initialSection = window.location.hash.substring(1) || 'flights';
    switchSection(initialSection);

    // Configurar fechas mínimas en los inputs de fecha
    const today = new Date().toISOString().split('T')[0];
    const departureDateInput = document.getElementById('departureDate');
    const returnDateInput = document.getElementById('returnDate');
    
    if (departureDateInput && returnDateInput) {
        departureDateInput.min = today;
        departureDateInput.addEventListener('change', () => {
            returnDateInput.min = departureDateInput.value;
        });
    }
});




// Función para abrir el modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Función para cerrar el modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Función cuando el usuario decide adquirir el paquete
function adquirirPaquete(paquete) {
    // Cierra los modales
    closeModal('modal1');
    closeModal('modal2');
    closeModal('modal3');
    
    // Crea una notificación (toast)
    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = "Has adquirido el " + paquete + " exitosamente.";

    // Agrega la notificación al contenedor
    document.getElementById('toast-container').appendChild(toast);

    // Remueve la notificación después de unos segundos
    setTimeout(function () {
        toast.remove();
    }, 3500); // 3.5 segundos para que desaparezca
}
function scrollToVuelos() {
    // Encuentra la sección de vuelos por su ID
    const vuelosSection = document.getElementById('vuelos-latam');
    
    // Desplázate suavemente a la sección
    vuelosSection.scrollIntoView({ behavior: 'smooth' });
}