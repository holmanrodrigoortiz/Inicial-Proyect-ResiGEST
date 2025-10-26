# 🏠 ResiGest - Sistema de Gestión Residencial Integral

## Descripción del Proyecto

**ResiGest** es un sistema web de gestión residencial integral diseñado para administrar propiedades, mantenimientos, residentes y demás aspectos relacionados con la gestión de conjuntos residenciales.

## 📋 Características

El sistema incluye 5 subpáginas principales:

1. **Página de Login** (`login.html`)
   - Autenticación de usuarios
   - Formulario de inicio de sesión con validación
   - Opción de recordar sesión
   - Enlace para recuperación de contraseña

2. **Dashboard / Inicio** (`index.html`)
   - Vista general del sistema con estadísticas clave
   - Tarjetas de métricas (propiedades, mantenimientos, ingresos, residentes)
   - Actividad reciente del sistema
   - Panel de control principal

3. **Propiedades** (`propiedades.html`)
   - Gestión de unidades residenciales
   - Vista en grid de tarjetas de propiedades
   - Información de cada propiedad (torre, área, habitaciones, residentes)
   - Estados de ocupación (Ocupado, Disponible, En Mantenimiento)
   - Botón para agregar nuevas propiedades

4. **Mantenimientos** (`mantenimientos.html`)
   - Tabla de solicitudes y mantenimientos
   - Gestión de solicitudes por propiedad
   - Estados de mantenimiento (Pendiente, En Proceso, Completado)
   - Tipos de mantenimiento (plomería, eléctrico, reparaciones, etc.)
   - Botón para crear nueva solicitud

5. **Contacto** (`contacto.html`)
   - Información de contacto de la administración
   - Formulario de contacto
   - Datos de ubicación, teléfonos y horarios
   - Información de redes sociales

## 🎨 Diseño y Características Técnicas

### Frontend
- **HTML5** semántico
- **CSS3** con variables CSS para fácil personalización
- **JavaScript** vanilla para interactividad
- Diseño responsive (adaptable a móviles y tablets)
- Paleta de colores moderna y profesional
- Animaciones suaves y transiciones
- Iconos emoji para mejor UX

### Estructura de Archivos
```
Miprimerawebdecursor/
├── index.html           # Página principal (Dashboard)
├── login.html           # Página de login
├── propiedades.html     # Gestión de propiedades
├── mantenimientos.html  # Gestión de mantenimientos
├── contacto.html        # Página de contacto
├── estilos.css          # Estilos globales
├── script.js            # JavaScript principal
└── README.md            # Documentación
```

## 🚀 Cómo Usar

1. **Abrir el proyecto**
   - Abre el archivo `login.html` en tu navegador web
   - Para ver las demás páginas, navega a través de los enlaces del menú

2. **Iniciar sesión**
   - Usuario: cualquier texto
   - Contraseña: cualquier texto
   - (Sistema de autenticación simulado para propósitos de demostración)

3. **Navegación**
   - Usa el menú superior para navegar entre páginas
   - Todas las páginas están interconectadas

## 📱 Responsive Design

El sitio es completamente responsive y se adapta a:
- 📱 Dispositivos móviles (320px - 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktop (1024px+)

## 🎯 Funcionalidades Implementadas

### Navegación
- ✅ Barra de navegación sticky (siempre visible)
- ✅ Menú responsive con enlaces activos
- ✅ Botón de cierre de sesión

### Dashboard
- ✅ Tarjetas de estadísticas interactivas
- ✅ Sección de actividad reciente
- ✅ Animaciones al hacer scroll

### Login
- ✅ Validación de formulario
- ✅ Redirección automática al dashboard
- ✅ Simulación de autenticación

### UI/UX
- ✅ Diseño limpio y moderno
- ✅ Feedback visual en interacciones
- ✅ Hover effects en elementos clicables
- ✅ Gradientes y sombras modernas

## 🔧 Tecnologías Utilizadas

- HTML5
- CSS3 (con CSS Grid y Flexbox)
- JavaScript (ES6+)
- Sin dependencias externas

## 📝 Notas

Este es un prototipo frontend que demuestra:
- Mockups y maquetas de navegación
- Diseño de interfaces para aplicaciones web
- Estructura semántica y accesible
- Responsive design
- Interactividad básica

**Nota:** Para producción, este sistema requeriría:
- Backend (Node.js, PHP, Python, etc.)
- Base de datos (MySQL, PostgreSQL, etc.)
- Autenticación segura (JWT, OAuth, etc.)
- API REST para comunicación
- Sistema de gestión de estados
- Tests automatizados

## 👤 Autor

Desarrollado como parte del proyecto de Sistema de Gestión Residencial Integral para el SENA.

## 📄 Licencia

Este proyecto es de uso educativo y demostrativo.

---

**ResiGest** - Sistema de Gestión Residencial Integral © 2024
