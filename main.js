function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");
for (const tecla of listaDeTeclas) {
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;
  console.log(idAudio);
  tecla.addEventListener("click", function () {
    tocaSom(idAudio);
  });
}
