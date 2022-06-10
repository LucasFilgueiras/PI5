// let user = document.querySelector(".user");
// const nameUser = sessionStorage.getItem("Nome");
// user.innerHTML = `Bem Vindo(a) ${nameUser}`;

let deleteImg = document.querySelector(".delete");
let sendButton = document.querySelector('#send')

function deleteQuestion() {
  let container1 = document.querySelector(".subContainer2");
  let container2 = document.querySelector(".questionContainer2");
  container1.removeChild(container2);
}

// function newQuestion() {
//   let enunciado = document.querySelector(".enunciado").value;
//   let enunciadoCache = sessionStorage.setItem(enunciado);
//   // let tema = document.querySelector(".tema").value;
//   container1.appendChild(`<div class="questionContainer2">
//   <p>${enunciadoCache}</p>
//   <a href="./editPergunta.html"><img src="../images/edit.svg" alt=""></a>
//   <img class="delete" src="../images/delete.svg" alt="">
// </div>`);
// }

deleteImg.addEventListener("click", deleteQuestion);
sendButton.addEventListener("click", ()=> {
      const email = document.querySelector(".name");
      const emailValue = name.value;
      sessionStorage.setItem("Email", emailValue);
});
// proximo.addEventListener("click", newQuestion);
