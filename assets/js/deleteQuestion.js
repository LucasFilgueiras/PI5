let deleteImg = document.querySelector(".delete");

// Excluir questão
function deleteQuestion() {
  let container1 = document.querySelector(".subContainer2");
  let container2 = document.querySelector(".questionContainer2");
  container1.removeChild(container2);
}

deleteImg.addEventListener("click", deleteQuestion);