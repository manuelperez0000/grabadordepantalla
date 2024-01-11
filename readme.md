# Screen Recorder App

Esta es una sencilla aplicación de grabación de pantalla creada con TypeScript. Permite a los usuarios capturar tanto video como audio de su pantalla y descargar la grabación resultante en formato webm.

## Uso

Para comenzar la grabación, utiliza la función `startRecording()`. La aplicación solicitará permisos para acceder a tu pantalla y micrófono. Una vez que comiences la grabación, se generarán fragmentos de video que se almacenarán en un objeto Blob.

Para detener la grabación, utiliza la función `stopRecording()`. La aplicación detendrá la grabación y liberará los recursos del stream de captura.

La grabación final se guardará en un archivo webm y se descargará automáticamente con un nombre generado dinámicamente utilizando la función `getName()`.

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Ejecuta la aplicación:

    ```bash
    npm run dev
    ```

## Dependencias

- `getTypeName`: Una función para obtener un nombre único para cada grabación.

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE.md](LICENSE.md) para más detalles.

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes alguna mejora, no dudes en abrir un problema o enviar una solicitud de extracción.

---

**Aviso:** Esta aplicación utiliza funciones de captura de pantalla y audio que pueden requerir permisos del usuario y no estar disponibles en todos los navegadores. Asegúrate de probarla en un entorno adecuado.
