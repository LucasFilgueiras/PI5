function captureName() {
    const professorButton = document.querySelector(".professor");
    const alunoButton = document.querySelector(".aluno");

    professorButton.addEventListener("click", () => {
        const name = document.querySelector(".name");
        const nameValue = name.value;
        sessionStorage.setItem("Nome", nameValue);
    })

    alunoButton.addEventListener("click", () => {
        const name = document.querySelector(".name");
        const nameValue = name.value;
        sessionStorage.setItem("Nome", nameValue);
    })


}

captureName();
