const next = document.querySelector(".next");

async function captureQuestion() {
  const enunciado = document.querySelector(".enunciado").value;
  const tema = document.querySelector(".tema").value;

  sessionStorage.setItem("Enunciado", enunciado);
  sessionStorage.setItem("Tema", tema);
}

next.addEventListener("click", captureQuestion);
