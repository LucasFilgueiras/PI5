let getPostAnswer1 = sessionStorage.getItem("postAnswer1");
let getPostAnswer2 = sessionStorage.getItem("postAnswer2");
let getPostAnswer3 = sessionStorage.getItem("postAnswer3");
let getPostAnswer4 = sessionStorage.getItem("postAnswer4");
let getQuestEnunciado = sessionStorage.getItem("Enunciado");

let getEnunciado = document.querySelector(".getEnunciado");

let getQuestAnswer1 = document.querySelector("#answer1");
let getQuestAnswer2 = document.querySelector("#answer2");
let getQuestAnswer3 = document.querySelector("#answer3");
let getQuestAnswer4 = document.querySelector("#answer4");

getEnunciado.innerHTML = getQuestEnunciado;
getQuestAnswer1.innerHTML = getPostAnswer1;
getQuestAnswer2.innerHTML = getPostAnswer2;
getQuestAnswer3.innerHTML = getPostAnswer3;
getQuestAnswer4.innerHTML = getPostAnswer4;
