function tocaSom(idElementoAudio) {
  const elemento = document.querySelector(idElementoAudio);

  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento não encontrado ou seletor inválido");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (const tecla of listaDeTeclas) {
  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;
  tecla.addEventListener("click", function () {
    tocaSom(idAudio);
  });

  tecla.addEventListener("keydown", function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add('ativa')
    }
  });

  tecla.addEventListener("keyup", function () {
    tecla.classList.remove("ativa");
  });
}
