let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

/**
 * Prompt akan muncul saat user menyentuh layar pertama kali
 * (tap / scroll / klik)
 */
const triggerInstall = async () => {
  if (!deferredPrompt) return;

  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;

  document.removeEventListener('click', triggerInstall);
  document.removeEventListener('touchstart', triggerInstall);
};

document.addEventListener('click', triggerInstall);
document.addEventListener('touchstart', triggerInstall);
