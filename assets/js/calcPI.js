let answers = document.querySelectorAll(".answer");
let getAnswers1 = (answers.length()/0.3);
let getAnswers2 = (answers.length()/(0.3+0.7)/2);
let getAnswers3 = (answers.length()/0.7);

let rightAnswer = document.querySelector(answers);

answers.forEach(element => {
    element.addEventListener("click", () => {
        if (rightAnswer <= getAnswers1) {
            window.alert("Os acertos foram abaixo de 30%, de acordo com o Peer Instruction o conceito deve ser revisado!");
        }
        else if (rightAnswer == getAnswers2) {
            window.alert("Os acertos estão entre 30% e 70%, de acordo com o Peer Instruction deve haver uma discussão em grupo e um novo questionário deve ser realizado!");
        }
        else if (rightAnswer >= getAnswers3) {
            window.alert("Os acertos estão acima de 70%, deve haver uma pequena explanação do professor sobre o tema e passar para o próximo!");
        }
    });
});
