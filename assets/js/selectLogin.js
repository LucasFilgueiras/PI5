let sendLogin = document.querySelector(".sendLogin");

async function login() {
  let inputEmail = document.querySelector(".emailLogin").value;
  let inputPassword = document.querySelector(".passwordLogin").value;

  let login = {
    email: inputEmail,
    password: inputPassword
  };

  if (inputEmail == "" || inputPassword == "") {
    window.alert("Insira e-mail e senha.");
    window.location.href = "./login.html";
  }

  let tokens = await postMethod(login, "user/login");
  console.log(tokens);
  sessionStorage.setItem("accessToken", tokens.tokens.accessToken);
  sessionStorage.setItem("refreshToken", tokens.tokens.refreshToken);

  let accessVerify = sessionStorage.getItem("accessToken");

  if (accessVerify == "undefined") {
    window.alert("Insira email e senha válidos.");
  }
  else {
    if (tokens.user.cargo == "Aluno") {
      window.location.href = "./responderQuest.html";
    } 
    else if (tokens.user.cargo == "Professor") {
      window.location.href = "./gerQuestionarios.html";
    }
  }

  
}

// async function verifyPosition() {
// }

sendLogin.addEventListener("click", login);
