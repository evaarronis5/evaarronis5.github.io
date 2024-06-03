// Función para reproducir el sonido de un fonema
function playSound(fonema) {
    let audio = new Audio(`${fonema}.mp3`);
    audio.play();
}
