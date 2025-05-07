# 📱 Proyecto de Automatización Mobile con Appium, WebDriverIO y Jenkins


---

## ✅ ¿Qué se hizo en este proyecto?

1. **Se creó y configuró un proyecto de automatización mobile** con:
   - Appium + WebDriverIO (v8)
   - TypeScript como lenguaje
   - Mocha como framework de testing
   - Reporter `spec`  para resultados
   - Cobertura de código (`code coverage`) con NYC

2. **Se ejecutaron pruebas funcionales** sobre la app `ApiDemos-debug.apk`, incluyendo navegación, interacción con elementos y validaciones.

3. **Se subió el proyecto a GitHub**:  
   [Repositorio](https://github.com/agustin-bergomi/appium-wdio-typescript-new)

4. **Se integró GitHub Actions** para CI.
   
    ✅ GitHub Actions

    Creacion del archivo .github/workflows/test.yml.

    Definicion de workflow que:

        Instala dependencias (npm ci)

        Inicia Appium (appium --log)

        Ejecutaba los tests con npx wdio run wdio.conf.ts

    Se ejecuta automáticamente al hacer push a la rama principal.

   <img width="1640" alt="Github Actions" src="https://github.com/user-attachments/assets/962bc38b-0875-4dbb-9b4a-03db1e0236de" />

   

![Github action gif](https://github.com/user-attachments/assets/21589020-98cb-4b3e-9266-75e214b14330)


- Pending: analizar fallo del paso 5.

6. **Se configuró Jenkins localmente** para correr el proyecto:
   - Se creó un **Job freestyle** en `/Users/agustinbergomi/.jenkins`
   - Se definieron las variables `ANDROID_HOME`, `PATH` con `platform-tools` y `emulator`
   - Se instaló Node.js y dependencias con `npm install`
   - Se ejecutaron las pruebas con `npm test`

7. **Se subió la APK al repositorio** para que Jenkins pueda acceder al path relativo.

---

## 🚀 Resultado de la ejecución en Jenkins

- 4 pruebas ejecutadas exitosamente
- Reporter `spec` mostró los resultados de cada spec con su tiempo
- Jenkins marcó el build como `SUCCESS`

---

7. **Se agrego libreria para Test Coverage**
   En este caso como no esta conectado a un proyecto muestra cero coverage.



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
- Estrategia de ejecución: **paralela lógica**, pero **secuencial efectiva** por compartir el emulador: Se podria prender 2 emuladores y poner multicapabilities para correr tests en paralelo.

---

## 📌 Pendientes

- Agregar mas tests
- Revisar Jenknis
- Agregar mas tareas de jenkins
- Agregar mas github Actions
- Transformar todo a POM
- Otras mejoras

---
