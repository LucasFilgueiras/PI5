const next = document.querySelector(".next");

async function captureQuestion() {
  const enunciado = document.querySelector(".enunciado").value;
  const tema = document.querySelector(".tema").value;

  sessionStorage.setItem("Enunciado", enunciado);
  sessionStorage.setItem("Tema", tema);

  let getQuestion = sessionStorage.getItem("Enunciado");

  let questionDB = {
    idQuestionario: Math.random(),
    setEnunciado: getQuestion,
  };

  alternative = {
    idQuestion: 0,
    setAlternative: [
      {
        questionText: "Resposta 1",
        rightText: false,
      },
      {
        questionText: "Resposta 2",
        rightText: false,
      },
      {
        questionText: "Resposta 3",
        rightText: false,
      },
      {
        questionText: "Resposta 4",
        rightText: true,
      },
    ],
  };

  await postMethod(questionDB, "/questao");
  await postMethod(alternative, "/alternativa");
}

next.addEventListener("click", captureQuestion);
