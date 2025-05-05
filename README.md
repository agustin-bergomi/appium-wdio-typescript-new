# 📱 Proyecto de Automatización Mobile con Appium, WebDriverIO y Jenkins


---

## ✅ ¿Qué se hizo en este proyecto?

1. **Se creó y configuró un proyecto de automatización mobile** con:
   - Appium + WebDriverIO (v8)
   - TypeScript como lenguaje
   - Mocha como framework de testing
   - Reporter `spec` y `allure` para resultados
   - Cobertura de código (`code coverage`) con NYC

2. **Se ejecutaron pruebas funcionales** sobre la app `ApiDemos-debug.apk`, incluyendo navegación, interacción con elementos y validaciones.

3. **Se subió el proyecto a GitHub**:  
   [Repositorio](https://github.com/agustin-bergomi/appium-wdio-typescript-new)

4. **Se integró GitHub Actions** para CI, aunque se dejó de lado momentáneamente al incorporar Jenkins.

5. **Se configuró Jenkins localmente** para correr el proyecto:
   - Se creó un **Job freestyle** en `/Users/agustinbergomi/.jenkins`
   - Se definieron las variables `ANDROID_HOME`, `PATH` con `platform-tools` y `emulator`
   - Se instaló Node.js y dependencias con `npm install`
   - Se ejecutaron las pruebas con `npm test`

6. **Se subió la APK al repositorio** para que Jenkins pueda acceder al path relativo.

---

## 🚀 Resultado de la ejecución en Jenkins

- 4 pruebas ejecutadas exitosamente
- Reporter `spec` mostró los resultados de cada spec con su tiempo
- Jenkins marcó el build como `SUCCESS`

---

## ⚠️ Errores y obstáculos resueltos

| Descripción del Error | Solución Aplicada |
|------------------------|-------------------|
| `node: command not found` | Se agregó `/usr/local/bin` al `PATH` |
| `APK not found` | Se subió la APK al repositorio para que Jenkins la encuentre |
| Workers en paralelo colisionaban con el emulador | Se identificó que, aunque se ejecutan en paralelo, **usan el mismo emulador y por eso corren uno por uno** |
| `Jenkinsfile` generaba conflictos | Se optó por un **Job freestyle** eliminando la dependencia del Jenkinsfile |

---

## 🧪 Detalles técnicos del testing

- Pruebas sobre elementos de UI (navegación, botones, vistas)
- Emulador usado: `Pixel 7 API 34` con Android 14
- Estrategia de ejecución: **paralela lógica**, pero **secuencial efectiva** por compartir el emulador

---

## 📌 Pendientes

- ⚙️ Configurar **emuladores múltiples** o integrar con **servicios cloud** (BrowserStack, SauceLabs)
- 🔧 Aumentar cobertura de pruebas (más casos de uso, validaciones)
- ☁️ Subir Jenkins a un entorno cloud o usar Jenkins en contenedores (Docker)
- 📈 Integrar Allure en Jenkins para resultados visuales
- 💬 Integrar notificaciones por Slack/Mail si es necesario

---
