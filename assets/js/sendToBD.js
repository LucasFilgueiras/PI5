import postMethod from "./postMethod";

async function sendAnswers() {
  let resposta1 = sessionStorage.getItem("postAnswer1");
  let resposta2 = sessionStorage.getItem("postAnswer2");
  let resposta3 = sessionStorage.getItem("postAnswer3");
  let resposta4 = sessionStorage.getItem("postAnswer4");

  let sendBD = {
    idquestao: 0,
    alternativa: [
      {
        texto: resposta1,
        correta: true
      },
      {
        texto: resposta2,
        correta: false
      },
      {
        texto: resposta3,
        correta: false
      },
      {
        texto: resposta4,
        correta: false
      }
    ],
  };

  await postMethod(sendBD, "/alternativa");
}

sendAnswers();
