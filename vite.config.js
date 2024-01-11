export default {
    build: {
      outDir: 'dist', // Directorio de salida para los archivos compilados
      emptyOutDir: true, // Vacía el directorio de salida antes de cada construcción
      rollupOptions: {
        input: 'src/main.ts', // Ruta al archivo principal de entrada (ajusta según tu estructura)
      },
    },
  };