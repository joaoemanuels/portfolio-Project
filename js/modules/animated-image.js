export default function initanimatedImage() {
  
  const imagem = document.getElementById("animated");


let mouseX = 0;
let mouseY = 0;

imagem.addEventListener("mousemove", (e) => {
  
  const animatedElement = document.getElementById("animated");
    
    // Remova a regra de animação CSS
    animatedElement.style.animation = "none";



  const { clientX, clientY } = e;
  const { left, top, width, height } = imagem.getBoundingClientRect();

  const centerX = left + width / 2;
  const centerY = top + height / 2;

  const deltaX = clientX - centerX;
  const deltaY = clientY - centerY;

  // Aumentar o fator de escala para tornar a rotação mais sensível
  const scale = 4;

  const angleX = (deltaX / width) * 30 * scale; // Rotação em graus
  const angleY = (deltaY / height) * 30 * scale; // Rotação em graus

  imagem.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`;
  
  // Atualiza as coordenadas do mouse
  mouseX = clientX;
  mouseY = clientY;
});

imagem.addEventListener("mouseleave", () => {
  // Quando o mouse sai, a rotação é resetada
  imagem.style.transform = "rotateX(0deg) rotateY(0deg)";
});

// Rastreamento contínuo do mouse, mesmo fora da imagem
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});



}