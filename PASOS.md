# 📱 Guía: Instalar la app de Pacho en iPhone

## ¿Qué vas a tener al final?
- Una app en el iPhone de Pacho con botones grandes y voz
- Un panel en tu celular donde ves el estado del día en tiempo real
- Todo gratis, sin App Store

---

## PARTE 1 — Subir el código a GitHub (10 min)

### Paso 1: Crear cuenta en GitHub
1. Ve a **github.com**
2. Haz clic en **Sign up** (esquina superior derecha)
3. Elige un usuario, correo y contraseña
4. Confirma tu correo cuando llegue el email

### Paso 2: Crear el repositorio (carpeta del proyecto)
1. Cuando entres a GitHub, haz clic en el botón verde **New** (o el símbolo **+** arriba)
2. En **Repository name** escribe: `pacho-app`
3. Selecciona **Public** (necesario para GitHub Pages gratis)
4. Activa el check **Add a README file**
5. Haz clic en **Create repository**

### Paso 3: Subir los 5 archivos
1. Dentro del repositorio, haz clic en **Add file → Upload files**
2. Arrastra o selecciona estos 5 archivos:
   - `index.html`
   - `config.js`
   - `manifest.json`
   - `sw.js`
   - `icon.svg`
3. En la parte de abajo, donde dice **Commit changes**, deja el texto que está y haz clic en **Commit changes**

✅ Ya están tus archivos en GitHub.

---

## PARTE 2 — Activar la app en internet (3 min)

### Paso 4: Activar GitHub Pages
1. En tu repositorio, haz clic en **Settings** (la tuerca, arriba a la derecha)
2. En el menú izquierdo, busca y haz clic en **Pages**
3. En **Source**, selecciona **Deploy from a branch**
4. En **Branch**, elige **main** y deja `/ (root)`
5. Haz clic en **Save**
6. Espera 2-3 minutos
7. Aparecerá un mensaje verde con tu URL:
   ```
   https://TU-USUARIO.github.io/pacho-app
   ```

✅ La app ya está en internet. Guarda ese link.

---

## PARTE 3 — Firebase (sincronización entre celulares)

> ⚠️ Este paso es para que tú veas desde tu celular lo que Pacho hace en el suyo.
> Si por ahora van a usar el mismo celular, puedes saltarte esta parte.

### Paso 5: Crear proyecto Firebase
1. Ve a **console.firebase.google.com** (necesitas cuenta Google)
2. Haz clic en **Agregar proyecto**
3. Nombre del proyecto: `pacho-app` → Siguiente → Siguiente → Crear proyecto
4. Espera que se cree (30 segundos)

### Paso 6: Crear base de datos Firestore
1. En el menú izquierdo, haz clic en **Firestore Database**
2. Haz clic en **Crear base de datos**
3. Selecciona **Iniciar en modo de prueba** → Siguiente
4. Elige la región más cercana (ej: `us-central1`) → Listo

### Paso 7: Configurar permisos
1. En Firestore, haz clic en la pestaña **Reglas**
2. Reemplaza todo el texto con esto:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /families/{document=**} {
      allow read, write: if true;
    }
  }
}
```
3. Haz clic en **Publicar**

### Paso 8: Obtener las credenciales
1. Haz clic en el ícono de tuerca ⚙️ → **Configuración del proyecto**
2. Baja hasta **Tus apps** y haz clic en el ícono `</>`  (web)
3. Nombre de la app: `pacho-web` → Registrar app
4. Verás un bloque de código como este:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "pacho-app-xxxx.firebaseapp.com",
  projectId: "pacho-app-xxxx",
  storageBucket: "pacho-app-xxxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```
5. Copia esos valores

### Paso 9: Pegar en config.js
1. En GitHub, abre tu repositorio `pacho-app`
2. Haz clic en el archivo `config.js`
3. Haz clic en el ícono de lápiz ✏️ (Edit this file)
4. Reemplaza cada valor de `TU_...` con los valores copiados de Firebase
5. Haz clic en **Commit changes**

✅ La sincronización en tiempo real ya funciona.

---

## PARTE 4 — Instalar en el iPhone de Pacho (2 min)

### Paso 10: Instalar como app nativa
1. En el iPhone de Pacho, abre **Safari** (tiene que ser Safari, no Chrome)
2. Ve a la URL: `https://TU-USUARIO.github.io/pacho-app`
3. Toca el botón de **Compartir** (el cuadrado con flecha hacia arriba ↑)
4. Desplázate y toca **Añadir a pantalla de inicio**
5. El nombre aparecerá como "Mi Día" — toca **Añadir**

✅ Aparece el ícono azul "Mi Día" en su pantalla de inicio. Se abre en pantalla completa, sin barras de Safari. Se ve y funciona como una app nativa.

---

## PARTE 5 — Configurar la app

### Paso 11: Primera apertura en el iPhone de Pacho
1. Abre la app "Mi Día" desde su pantalla de inicio
2. Aparece la pantalla de configuración
3. **Nombre**: escribe `Pacho` (o como prefieran llamarlo)
4. **Código de familia**: escribe el mismo código en TODOS los celulares
   - Ejemplo: `familia-garcia-2024`
   - ⚠️ Todos deben usar exactamente el mismo código para ver los mismos datos
5. Toca **Empezar →**
6. Cambia a la pestaña **📱 Pacho** — esa es su vista

### Paso 12: Instalar en tu celular (panel familiar)
1. Abre la misma URL en tu Safari
2. Repite los pasos de instalación
3. Usa **exactamente el mismo código de familia**
4. Tú verás el panel familiar por defecto

---

## RESUMEN DE LINKS QUE NECESITAS

| Cosa | Link |
|------|------|
| Tu app | `https://TU-USUARIO.github.io/pacho-app` |
| GitHub (para editar) | `https://github.com/TU-USUARIO/pacho-app` |
| Firebase console | `https://console.firebase.google.com` |

---

## ¿Cómo actualizar la app en el futuro?

Si quieres cambiar algo (rutinas, horarios, mensajes de voz):
1. Ve a github.com → tu repositorio `pacho-app`
2. Haz clic en el archivo que quieres editar (ej: `index.html`)
3. Haz clic en el lápiz ✏️
4. Haz los cambios
5. Haz clic en **Commit changes**
6. En 2 minutos, la app actualizada ya está en el iPhone de Pacho

---

## ¿Problemas?

**La app no aparece después de GitHub Pages:**
→ Espera 5 minutos y recarga la página de Settings → Pages

**Los datos no se sincronizan entre celulares:**
→ Verifica que todos usaron exactamente el mismo "código de familia"
→ Verifica que pegaste bien las credenciales de Firebase en config.js

**La voz no funciona en el iPhone:**
→ El volumen del iPhone debe estar subido
→ Toca primero el botón 🔊 Escuchar (iOS requiere un toque antes de hablar)
