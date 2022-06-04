let user = document.querySelector(".user");
const nameUser = sessionStorage.getItem("Nome");

user.innerHTML = `Bem Vindo(a) ${nameUser}`;

function deleteQuestion() {
    const deleteQuestion = document.querySelector(".delete");
    deleteQuestion.addEventListener("click", () => {
        const questionContainer = document.querySelector(".questionContainer");
        questionContainer.classList.add("remove");
    })
}

deleteQuestion();

