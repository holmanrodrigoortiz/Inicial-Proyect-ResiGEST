# 🚀 Guía de Despliegue - ResiGest

## Opciones para Compartir tu Proyecto

### ✅ **Opción 1: Netlify (La más Rápida)**

1. Ve a: https://www.netlify.com
2. Regístrate gratis
3. En el dashboard, busca "Sites"
4. Arrastra y suelta tu carpeta completa del proyecto
5. ¡Listo! Obtendrás un enlace como:
   ```
   https://nombre-random-123.netlify.app
   ```
6. Para compartir, envía el enlace a `presentacion.html`:
   ```
   https://tu-link.netlify.app/presentacion.html
   ```

**Ventajas:**
- ✅ Gratis
- ✅ Súper rápido (30 segundos)
- ✅ HTTPS automático
- ✅ URL personalizable
- ✅ Se actualiza automáticamente

---

### ✅ **Opción 2: GitHub Pages (Método Profesional)**

#### Paso 1: Crear repositorio en GitHub
1. Ve a: https://github.com
2. Crea cuenta (si no tienes)
3. Click en el botón "+" → "New repository"
4. Nombre: `resigest-sistema`
5. Selecciona "Public"
6. Click en "Create repository"

#### Paso 2: Subir archivos
**Opción A: Desde VS Code**
1. Instala extensión "Git" en VS Code
2. Abre terminal en VS Code (Ctrl + `)
3. Ejecuta:
   ```bash
   git init
   git add .
   git commit -m "Inicial proyecto ResiGest"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/resigest-sistema.git
   git push -u origin main
   ```

**Opción B: Desde la web de GitHub**
1. Arrastra todos los archivos a GitHub
2. Click en "Commit changes"

#### Paso 3: Activar GitHub Pages
1. Ve a Settings en tu repositorio
2. Click en "Pages" (menú izquierdo)
3. En "Source" selecciona "main"
4. Guarda

#### Paso 4: Tu sitio estará en:
```
https://TU_USUARIO.github.io/resigest-sistema/presentacion.html
```

---

### ✅ **Opción 3: Vercel (Alternativa Moderna)**

1. Ve a: https://vercel.com
2. Regístrate con GitHub
3. Click en "New Project"
4. Importa tu repositorio de GitHub o arrastra la carpeta
5. Click en "Deploy"
6. En pocos segundos tendrás tu URL

---

### ✅ **Opción 4: Para Desarrollo Local (Compartir en tu red)**

Si solo quieres que alguien en tu misma red (misma WiFi) vea tu proyecto:

1. En VS Code, instala la extensión "Live Server"
2. Click derecho en `presentacion.html`
3. Selecciona "Open with Live Server"
4. Obtendrás una URL como: `http://127.0.0.1:5500/presentacion.html`
5. Encuentra tu IP local (ejecuta `ipconfig` en cmd)
6. Comparte: `http://TU_IP:5500/presentacion.html`

**Limitación:** La otra persona debe estar en la misma red WiFi.

---

## 📝 Pasos Finales Después de Desplegar

### 1. Prueba tu sitio
- Abre el enlace en tu navegador
- Verifica que todas las páginas funcionen
- Prueba la navegación

### 2. Comparte el enlace correcto

**Enlace principal (presentación):**
```
https://tu-sitio.com/presentacion.html
```

**Enlace directo al sistema (login):**
```
https://tu-sitio.com/login.html
```

### 3. Instrucciones para quien revisa

```
1. Abrir: [tu enlace]
2. Click en "Ingresar al Sistema"
3. Usar cualquier usuario y contraseña
4. Explorar todas las páginas desde el menú
```

---

## 🎯 Recomendación Final

**Para este proyecto, te recomiendo Netlify:**
- Es la forma más rápida y simple
- No necesitas saber Git
- Funciona inmediatamente
- Es gratis y profesional

---

## ❓ ¿Necesitas Ayuda?

Si tienes problemas con algún método, avísame y te ayudo paso a paso.

---

**¡Buena suerte con tu proyecto!** 🚀
