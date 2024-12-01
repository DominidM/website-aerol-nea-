class Chatbot {
    constructor() {
        this.responses = {
            es: {
                greeting: ['¡Hola!', '¡Bienvenido!', '¿En qué puedo ayudarte?'],
                farewell: ['¡Hasta luego!', '¡Que tengas un buen día!', '¡Adiós!'],
                unknown: ['Lo siento, no entiendo. ¿Podrías reformular tu pregunta?', 
                         'Disculpa, no estoy seguro de cómo ayudarte con eso.'],
                flights: ['Puedo ayudarte a encontrar vuelos.', 
                         'Tenemos excelentes ofertas de vuelos disponibles.'],
                hotels: ['Contamos con una amplia selección de hoteles.',
                        '¿Qué tipo de alojamiento estás buscando?'],
                help: ['Puedo ayudarte con:\n- Búsqueda de vuelos\n- Reservas de hotel\n- Información de paquetes\n- Preguntas frecuentes']
            },
            en: {
                greeting: ['Hello!', 'Welcome!', 'How can I help you?'],
                farewell: ['Goodbye!', 'Have a great day!', 'Bye!'],
                unknown: ['Sorry, I don\'t understand. Could you rephrase that?',
                         'I\'m not sure how to help with that.'],
                flights: ['I can help you find flights.',
                         'We have excellent flight deals available.'],
                hotels: ['We have a wide selection of hotels.',
                        'What kind of accommodation are you looking for?'],
                help: ['I can help you with:\n- Flight search\n- Hotel bookings\n- Package information\n- FAQ']
            }
        };

        this.chatToggle = document.querySelector('.chat-toggle');
        this.chatWindow = document.querySelector('.chat-window');
        this.chatMessages = document.querySelector('.chat-messages');
        this.chatForm = document.getElementById('chatForm');
        this.chatClose = document.querySelector('.chat-close');

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.chatToggle.addEventListener('click', () => this.toggleChat());
        this.chatClose.addEventListener('click', () => this.toggleChat());
        this.chatForm.addEventListener('submit', (e) => this.handleMessage(e));
    }

    toggleChat() {
        this.chatWindow.classList.toggle('active');
        if (this.chatWindow.classList.contains('active')) {
            this.chatForm.querySelector('input').focus();
        }
    }

    async handleMessage(e) {
        e.preventDefault();
        const input = this.chatForm.querySelector('input');
        const message = input.value.trim();
        
        if (message) {
            this.addMessage(message, 'user');
            input.value = '';

            // Simular tiempo de respuesta
            await this.delay(1000);
            
            const response = this.generateResponse(message);  
            this.addMessage(response, 'bot');
        }
    }

    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.innerHTML = `<p>${text}</p>`;
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    // Respuestas predefinidas para preguntas comunes
    generateResponse(message) {
        const lang = document.documentElement.lang || 'es'; // Usa el idioma del documento
        const prompt = this.createPrompt(message, lang);

        // Respuesta según el mensaje recibido
        if (message.toLowerCase().includes("hola")) {
            return this.responses[lang].greeting[Math.floor(Math.random() * this.responses[lang].greeting.length)];
        }
        if (message.toLowerCase().includes("adiós")) {
            return this.responses[lang].farewell[Math.floor(Math.random() * this.responses[lang].farewell.length)];
        }
        if (message.toLowerCase().includes("vuelos")) {
            return this.responses[lang].flights[Math.floor(Math.random() * this.responses[lang].flights.length)];
        }
        if (message.toLowerCase().includes("hoteles")) {
            return this.responses[lang].hotels[Math.floor(Math.random() * this.responses[lang].hotels.length)];
        }
        return this.responses[lang].unknown[Math.floor(Math.random() * this.responses[lang].unknown.length)];
    }

    // Función para generar el prompt en función del idioma
    createPrompt(message, lang) {
        const predefinedPrompts = {
            es: "Responde en español: ",
            en: "Respond in English: "
        };
        return predefinedPrompts[lang] + message;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Inicializar el chatbot
document.addEventListener('DOMContentLoaded', () => {
    window.chatbot = new Chatbot();
});
