function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

while (contador < listaDeTeclas.length) {

  const idAudio = `#som_${instrumento}`;
  console.log(idAudio);  
  listaDeTeclas[contador].onclick = function () {
    tocaSom('#tecla_');
  }

  contador = contador + 1;

  console.log(contador);
}
