// Kamerakép lekérdezése és megjelenítése
function startCamera(videoElement) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoElement.srcObject = stream;
      })
      .catch(error => {
        console.error('Error accessing the camera:', error);
      });
  }
  
  // Play gomb eseménykezelő
  function handlePlayButton(button, videoElement) {
    button.addEventListener('click', () => {
      if (videoElement.srcObject) {
        // Kamera már fut, leállítjuk
        videoElement.pause();
        videoElement.srcObject = null;
        button.textContent = 'Play';
      } else {
        // Kamera indítása
        startCamera(videoElement);
        button.textContent = 'Stop';
      }
    });
  }
  
  // Az oldal betöltése után
  window.addEventListener('DOMContentLoaded', () => {
    const playButton1 = document.getElementById('playButton1');
    const playButton2 = document.getElementById('playButton2');
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
  
    // Eseménykezelők hozzáadása
    handlePlayButton(playButton1, video1);
    handlePlayButton(playButton2, video2);
  });
  