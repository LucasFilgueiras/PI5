let sendLogin = document.querySelector(".sendLogin");

async function login() {
  let inputEmail = document.querySelector(".emailLogin").value;
  let inputPassword = document.querySelector(".passwordLogin").value;

  let login = {
    email: inputEmail,
    password: inputPassword,
  };
  let tokens = await postMethod(login, "user/login");
  sessionStorage.setItem("accessToken", tokens.accessToken);
  sessionStorage.setItem("refreshToken", tokens.refreshToken);

  let accessVerify = sessionStorage.getItem("accessToken");

  if (accessVerify == "undefined") {
    window.alert("Insira email e senha válidos.");
  }
  else {
    window.location.href = "./gerQuestionarios.html";
  }
}

// async function verifyPosition() {
// }

sendLogin.addEventListener("click", login);
