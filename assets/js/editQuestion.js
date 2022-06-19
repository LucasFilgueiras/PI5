const edit = document.querySelector(".edit");

function editQuestion() {
    const getEnunciado = document.querySelector(".enunciado").value;
    sessionStorage.setItem("editEnunciado", getEnunciado);
}

edit.addEventListener("click", editQuestion);