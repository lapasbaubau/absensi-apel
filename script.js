    const video = document.getElementById('cameraView');
    const captureBtn = document.getElementById('captureBtn');
    const canvas = document.getElementById('photoCanvas');
    const ctx = canvas.getContext('2d');

    // Minta akses kamera
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { 
            facingMode: 'environment' // gunakan kamera belakang
          },
          audio: false
        });
        video.srcObject = stream;
      } catch (error) {
        console.error('Error mengakses kamera:', error);
        alert('Tidak dapat mengakses kamera. Pastikan Anda memberikan izin.');
      }
    }

    // Ambil foto
    captureBtn.addEventListener('click', () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0);
      
      // Konversi ke data URL
      const photoData = canvas.toDataURL('image/jpeg');
      
      // Lakukan sesuatu dengan foto (simpan, kirim ke server, dll)
      console.log('Foto diambil:', photoData.substring(0, 50) + '...');
      
      // Kirim ke Google Apps Script jika diperlukan
      // sendToGoogleAppsScript(photoData);
    });

    // Mulai kamera saat halaman dimuat
    window.addEventListener('DOMContentLoaded', startCamera);
