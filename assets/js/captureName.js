function captureName() {
  const professorButton = document.querySelector(".professor");
  const alunoButton = document.querySelector(".aluno");

  professorButton.addEventListener("click", async () => {
    const name = document.querySelector(".name");
    const nameValue = name.value;
    sessionStorage.setItem("Nome", nameValue);
    await insertRegister("Professor");
    window.location.href = "../../index.html";
  });

  alunoButton.addEventListener("click", async () => {
    const name = document.querySelector(".name");
    const nameValue = name.value;
    sessionStorage.setItem("Nome", nameValue);
    await insertRegister("Aluno");
    window.location.href = "../../index.html";
  });
}

async function insertRegister(cargo) {
  let dataRegister = {
    email: sessionStorage.getItem("Email"),
    password: sessionStorage.getItem("Password"),
    username: sessionStorage.getItem("Nome"),
    cargo: cargo
  };
  console.log(dataRegister);
  let tokens = await postMethod(dataRegister, "user/register");
  sessionStorage.setItem("accessToken", tokens.tokens.accessToken);
  sessionStorage.setItem("refreshToken", tokens.tokens.refreshToken);
}

captureName();
