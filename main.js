
window.addEventListener('load', () => {
  const animatedPhoto = document.getElementById('animatedPhoto');
  const animatedText = document.getElementById('animatedText');

  setTimeout(() => {
    animatedPhoto.style.opacity = '2';
    animatedText.style.opacity = '2';
  }, 500); 
});