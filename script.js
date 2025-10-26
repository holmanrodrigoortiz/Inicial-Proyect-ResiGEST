// Sistema de Gestión Residencial Integral - ResiGest

// Funcionalidad del Login
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // Validación simple (en producción, esto se conectaría a un backend)
      if (username && password) {
        // Simular inicio de sesión exitoso
        alert('¡Inicio de sesión exitoso! Redirigiendo al dashboard...');
        
        // Redirigir al dashboard
        window.location.href = 'index.html';
      } else {
        alert('Por favor, complete todos los campos');
      }
    });
  }

  // Funcionalidad de formularios
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      // Aquí se pueden agregar más validaciones
      console.log('Formulario enviado');
    });
  });

  // Animaciones suaves al hacer scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observar elementos con animación
  const animatedElements = document.querySelectorAll('.stat-card, .property-card, .activity-item');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Funcionalidad adicional para mejorar la experiencia de usuario
function addTooltip(element, message) {
  element.addEventListener('mouseenter', function() {
    const tooltip = document.createElement('div');
    tooltip.textContent = message;
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.top = rect.top - 40 + 'px';
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
  });
  
  element.addEventListener('mouseleave', function() {
    document.querySelector('.tooltip')?.remove();
  });
}

// Simulación de datos dinámicos
function updateStats() {
  // Esta función se podría conectar a una API para obtener datos reales
  console.log('Actualizando estadísticas...');
}

// Exportar funciones si es necesario para módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { updateStats, addTooltip };
}
