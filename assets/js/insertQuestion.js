async function insertQuestion() {
  const getEnunciado = sessionStorage.getItem("Enunciado");
  const getTema = sessionStorage.getItem("Tema");
  let container = document.querySelector(".subContainer2");
  let template = document.querySelector(".template");

  let getTemplate =
    (template.innerHTML = `<p class="enunciadoText">${getEnunciado}</p>
  <a href="./editPergunta.html"><img src="../images/edit.svg" alt=""></a> 
  <img class="delete" src="../images/delete.svg" alt="">`);

  template.classList.remove("hide");
  container.appendChild(getTemplate);

  insertQuestionBD = {
    idquestionario: 0,
    enunciado: getEnunciado
  };

  await postMethod(insertQuestionBD, "/questao");
}

function editQuestion() {
  const enunciadoText = document.querySelector(".enunciadoText");
  const getEditEnunciado = sessionStorage.getItem("editEnunciado");
  enunciadoText.innerHTML = getEditEnunciado;
}

insertQuestion();
editQuestion();

// let deleteImg = document.querySelector(".delete");

// deleteImg.addEventListener("click", deleteQuestion);
