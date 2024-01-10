// Obtener acceso a la pantalla y al audio
navigator.mediaDevices.getDisplayMedia({ audio: true, video: true })
  .then(function(stream) {
    // Crear un elemento de video para mostrar la captura
    var videoElement = document.createElement('video');
    videoElement.srcObject = stream;
    document.body.appendChild(videoElement);
    
    // Crear un elemento de audio para reproducir el audio capturado
    var audioElement = document.createElement('audio');
    audioElement.srcObject = stream;
    audioElement.play();
    
    // Botón de inicio de captura
    var startButton = document.createElement('button');
    startButton.textContent = 'Iniciar captura';
    startButton.addEventListener('click', function() {
      videoElement.play();
    });
    document.body.appendChild(startButton);
    
    // Botón de detención de captura
    var stopButton = document.createElement('button');
    stopButton.textContent = 'Detener captura';
    stopButton.addEventListener('click', function() {
      videoElement.pause();
    });

    
    document.body.appendChild(stopButton);
  })
  .catch(function(error) {
    console.error('Error al capturar pantalla y audio:', error);
  });