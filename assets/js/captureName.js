function captureName() {
  const professorButton = document.querySelector(".professor");
  const alunoButton = document.querySelector(".aluno");

  professorButton.addEventListener("click", () => {
    const name = document.querySelector(".name");
    const nameValue = name.value;
    sessionStorage.setItem("Nome", nameValue);
    insertRegister();
  });

  alunoButton.addEventListener("click", () => {
    const name = document.querySelector(".name");
    const nameValue = name.value;
    sessionStorage.setItem("Nome", nameValue);
    insertRegister();
  });
}

async function insertRegister() {
  let dataRegister = {
    email: sessionStorage.getItem("Email"),
    password: sessionStorage.getItem("Password"),
    username: sessionStorage.getItem("Nome")
  };
  let tokens = await postMethod(dataRegister, "user/register");
  sessionStorage.setItem("accessToken", tokens.accessToken);
  sessionStorage.setItem("refreshToken", tokens.refreshToken);
}

captureName();
