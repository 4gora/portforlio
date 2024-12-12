/* Código JS que faz com que a barra de navegação desapareça enquanto rolamos para baixo e reapareça ao rolar para cima*/

let lastScrollTop = 0; // variável que armazena a última posição do scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
/**
 * Adiciona ou remove a classe hidden do header com base na direção do scroll
 * Se o site rolar para baixo, a classe hidden é adicionada
 * Se o site rolar para cima, a classe hidden é removida
 */

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
  lastScrollTop = scrollTop;
});