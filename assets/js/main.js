// let user = document.querySelector(".user");
// const nameUser = sessionStorage.getItem("Nome");
// user.innerHTML = `Bem Vindo(a) ${nameUser}`;

let sendButton = document.querySelector("#send");

sendButton.addEventListener("click", () => {
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;
  sessionStorage.setItem("Email", email);
  sessionStorage.setItem("Password", password);
});

