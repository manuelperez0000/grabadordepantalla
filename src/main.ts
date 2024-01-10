import getName from './getName.ts'

// Variables para guardar el stream y el objeto MediaRecorder
let mediaStream: MediaStream;
let mediaRecorder: MediaRecorder;
let chunks: Blob[] = [];

// Función para comenzar la grabación
function startRecording(): void {
navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
  .then((stream: MediaStream) => {
    mediaStream = stream;
    // Crear el objeto MediaRecorder para grabar el video
    mediaRecorder = new MediaRecorder(stream);
    chunks = [];

    // Evento que se dispara cada vez que se graba un fragmento de video
    mediaRecorder.ondataavailable = (e: BlobEvent) => chunks.push(e.data);

    // Evento que se dispara cuando la grabación se detiene
    mediaRecorder.onstop = () => {
      // Crear un objeto Blob a partir de los fragmentos grabados
      const blob: Blob = new Blob(chunks, { type: 'video/webm' });

      // Crear un enlace de descarga para el video grabado
      const url: string = URL.createObjectURL(blob);
      const a: HTMLAnchorElement = document.createElement('a');
      a.href = url;
      a.download = getName()
      a.click();

      // Liberar el objeto URL
      URL.revokeObjectURL(url);
    };

    // Comenzar la grabación
    mediaRecorder.start();
  })
  .catch((err: Error) => {
    console.error('Error al capturar la pantalla:', err);
  });
}

// Función para detener la grabación
function stopRecording(): void {
  if (mediaRecorder && mediaStream) {
    // Detener la grabación
    mediaRecorder.stop();

    // Detener el stream de captura
    mediaStream.getTracks().forEach((track: MediaStreamTrack) => track.stop());
  }
}

export {
  startRecording,
  stopRecording,
}
