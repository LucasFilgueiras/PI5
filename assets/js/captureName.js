function captureName() {
    const professorButton = document.querySelector(".professor");

    professorButton.addEventListener("click", () => {
        const name = document.querySelector(".name");
        const nameValue = name.value;
        sessionStorage.setItem("Nome", nameValue);
    })
}

captureName();
