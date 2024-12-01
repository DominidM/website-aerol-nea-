// Datos de ejemplo para las actividades
const activitiesData = [
    { type: 'inspection', title: 'Inspección Diaria Completada', user: 'Airport Admin', time: '14:20', icon: 'clipboard-check' },
    { type: 'incident', title: 'Nuevo Reporte de Incidente', user: 'Safety Officer', time: '13:45', icon: 'exclamation-triangle' },
    { type: 'maintenance', title: 'Orden de Trabajo Creada', user: 'Maintenance Team', time: '12:30', icon: 'tools' },
    { type: 'wildlife', title: 'Registro Wildlife Actualizado', user: 'Wildlife Control', time: '11:15', icon: 'paw' }
];


// Función para generar el HTML de cada actividad
const createActivityItem = ({ title, user, time, icon }) => `
    <div class="activity-item">
        <div class="activity-icon">
            <i class="fas fa-${icon}"></i>
        </div>
        <div class="activity-info">
            <h4>${title}</h4>
            <p><strong>${user}</strong> - ${time}</p>
        </div>
    </div>
`;


function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Mostrar la sección seleccionada
    const selectedSection = document.getElementById(`${sectionId}-section`);
    selectedSection.classList.remove('hidden');
    
    // Ocultar todos los formularios
    const forms = document.querySelectorAll('#form-container form');
    forms.forEach(form => {
        form.classList.add('hidden');
    });

    // Ocultar todos los botones asociados a los formularios
    const buttons = document.querySelectorAll('.form-button');
    buttons.forEach(button => {
        button.classList.remove('active'); // Quitamos la clase 'active' si el botón está abierto
    });

    // También desmarcar todos los enlaces de navegación de "active"
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Activar el enlace correspondiente
    const activeLink = document.querySelector(`.nav-link[href="#${sectionId}-section"]`);
    activeLink.classList.add('active');
}



function showForm(formId, buttonId) {
    // Ocultar todos los formularios
    const forms = document.querySelectorAll('#form-container form');
    forms.forEach(form => {
        form.classList.add('hidden');
    });

    // Mostrar el formulario correspondiente
    const selectedForm = document.getElementById(formId);
    selectedForm.classList.remove('hidden');
    
    // Asegurarse de que el botón se marca como activo
    const button = document.getElementById(buttonId);
    button.classList.add('active'); // Marcar como activo el botón
}

// Función para cambiar de sección y ocultar todos los formularios
function changeSection(sectionId) {
    // Ocultar todos los formularios
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.classList.add('hidden');
    });

    // Ocultar las secciones, puedes agregar lógica adicional aquí si es necesario
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Mostrar la sección seleccionada
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.classList.remove('hidden');
    }
}


// Función para cargar las actividades
const loadActivities = () => {
    const activityList = document.querySelector('.activity-list');
    // Limpiar la lista antes de agregar nuevas actividades
    activityList.innerHTML = activitiesData.map(createActivityItem).join('');
};

// Función para actualizar la fecha
const updateDate = () => {
    const dateElement = document.getElementById('currentDate');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('es-ES', options);
};

// Función para manejar el botón de actualización
const handleRefresh = () => {
    const refreshButton = document.querySelector('.refresh-btn');
    const icon = refreshButton.querySelector('i');
    
    // Añadir clase para la animación de giro
    icon.classList.add('fa-spin');
    
    // Simulación de actualización de datos con un retraso
    setTimeout(() => {
        icon.classList.remove('fa-spin');
        // Aquí iría la lógica de actualización de datos (p. ej., llamada a API)
        console.log('Datos actualizados');
        // Si se actualizan actividades, recargar la lista
        loadActivities();
    }, 1000);
};

// Evento para el botón de actualización
const refreshButton = document.querySelector('.refresh-btn');
if (refreshButton) {
    refreshButton.addEventListener('click', handleRefresh);
}

// Cargar actividades y fecha al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    loadActivities();
    updateDate();
});

// Gráfico de Incidentes
const ctx1 = document.getElementById('incident-chart').getContext('2d');
const incidentChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
            label: 'Incidentes Reportados',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    }
});

// Gráfico de Distribución de Usuarios
const ctx2 = document.getElementById('user-distribution-chart').getContext('2d');
const userDistributionChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Activos', 'Inactivos'],
        datasets: [{
            data: [300, 100],
            backgroundColor: ['#36A2EB', '#FF6384']
        }]
    }
});

// Gráfico de Desempeño
const ctx3 = document.getElementById('performance-chart').getContext('2d');
const performanceChart = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
            label: 'Desempeño',
            data: [1, 2, 3, 4, 5],
            fill: false,
            borderColor: '#4BC0C0',
            tension: 0.1
        }]
    }
});

// Gráfico de Acciones del Sistema
const ctx4 = document.getElementById('system-actions-chart').getContext('2d');
const systemActionsChart = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: ['Login', 'Logout', 'Acciones', 'Errores'],
        datasets: [{
            data: [50, 30, 15, 5],
            backgroundColor: ['#FFCE56', '#FF6384', '#36A2EB', '#FF9F40']
        }]
    }
});





// Obtener los elementos del DOM
const profileImg = document.getElementById('profile-img');
const dropdownMenu = document.getElementById('dropdown-menu');

// Mostrar u ocultar el menú cuando se hace clic en la imagen de perfil
profileImg.addEventListener('click', function () {
    // Alternar la visibilidad del menú
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function (event) {
    if (!profileImg.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});

// Funcionalidad de "Cerrar Sesión"
const logoutLink = document.getElementById('logout-link');
logoutLink.addEventListener('click', function () {
    // Aquí puedes poner tu lógica para cerrar sesión, por ejemplo:
    alert('Sesión cerrada');
    // O redirigir a una página de login
    <a href="Login/index.html">Ir al Dashboard</a>

});
