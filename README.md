# 🚀 Proyecto de Integración Appium + Jenkins + WebDriverIO + TypeScript

**Autor:** Agustín Bergomi  
**Entorno:** macOS + Jenkins local + Appium + WebDriverIO + Mocha + TypeScript

---

## 🧾 Objetivo

Automatizar la ejecución de pruebas mobile sobre una app Android (`ApiDemos-debug.apk`) utilizando Jenkins como herramienta de integración continua, con ejecución paralela y control del proceso Appium.

---

## 🛠️ Pasos Realizados

### 1. **Configuración del Proyecto**
- Se subió el proyecto a GitHub con estructura WDIO + Appium.
- Se creó el archivo `wdio.conf.ts` con las capacidades necesarias:
  - `platformName: Android`
  - `automationName: UiAutomator2`
  - `deviceName: Pixel 7 API 34`
  - `app: ./apps/ApiDemos-debug.apk`

### 2. **Preparación del entorno Jenkins**
- Se instaló Jenkins en local.
- Se configuró un nuevo **Job freestyle** llamado `Appium job Agus`.
- Se agregó el repositorio de GitHub como fuente.
- Se agregó un paso de shell con:
  ```sh
  export ANDROID_HOME=...
  export PATH=...
  node -v
  npm -v
  npm install
  npm test
  ```
- El APK `ApiDemos-debug.apk` fue agregado al repositorio (`./apps/`).

### 3. **Resolución de Errores**

| Error                                                                                     | Solución                                                                 |
|-------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| `node: command not found`                                                                 | Se agregó `/usr/local/bin` al PATH.                                     |
| `The application ... does not exist or is not accessible`                                 | El APK no estaba en el workspace de Jenkins; se resolvió al agregarlo al repo. |
| Problemas de nombres con espacios como `Appium job Agus`                                  | No se cambió finalmente, pero no fue necesario gracias al fix del APK.  |

---

## ✅ Resultado Final

Todos los tests se ejecutaron correctamente. Jenkins marcó el build como `SUCCESS`.

---

