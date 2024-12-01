// translations.js
const translations = {
    es: {
        'flights': 'Vuelos',
        'hotels': 'Hoteles',
        'packages': 'Paquetes',
        'contact': 'Contacto',
        'hero-title': 'Descubre el mundo con nosotros',
        'hero-subtitle': 'Los mejores destinos y las mejores experiencias te esperan',
        'book-now': 'Reservar ahora',
        'from': 'Desde',
        'to': 'Hasta',
        'departure': 'Salida',
        'return': 'Regreso',
        'passengers': 'Pasajeros',
        'search': 'Buscar',
        'hotels-title': 'Encuentra tu hotel ideal',
        'packages-title': 'Paquetes turísticos',
        'contact-title': 'Contáctanos',
        'chat-title': 'Asistente Virtual',
        'chat-welcome': '¡Hola! ¿En qué puedo ayudarte hoy?',
        'chat-placeholder': 'Escribe tu mensaje...',
        'name': 'Nombre',
        'email': 'Email',
        'message': 'Mensaje',
        'send': 'Enviar',
        'search-placeholder': 'Buscar...'
    },
    en: {
        'flights': 'Flights',
        'hotels': 'Hotels',
        'packages': 'Packages',
        'contact': 'Contact',
        'hero-title': 'Discover the world with us',
        'hero-subtitle': 'The best destinations and experiences await you',
        'book-now': 'Book now',
        'from': 'From',
        'to': 'To',
        'departure': 'Departure',
        'return': 'Return',
        'passengers': 'Passengers',
        'search': 'Search',
        'hotels-title': 'Find your ideal hotel',
        'packages-title': 'Travel packages',
        'contact-title': 'Contact us',
        'chat-title': 'Virtual Assistant',
        'chat-welcome': 'Hello! How can I help you today?',
        'chat-placeholder': 'Type your message...',
        'name': 'Name',
        'email': 'Email',
        'message': 'Message',
        'send': 'Send',
        'search-placeholder': 'Search...'
    }
};

// Función para cambiar el idioma
function updateLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    localStorage.setItem('preferred-language', lang);
}

// Cargar idioma preferido del usuario
const preferredLanguage = localStorage.getItem('preferred-language') || 'es';
updateLanguage(preferredLanguage);