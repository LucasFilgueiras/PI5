let attCode = document.querySelector("#attCode");
let genCode = document.querySelector("#genCode");

let i = 1001;

let showCode = document.querySelector(".showCode");

attCode.addEventListener("click", () => {
  showCode.innerHTML = i++;
});

genCode.addEventListener("click", () => {
  innerShowCode = showCode.innerHTML;
  sessionStorage.setItem("CodeRoom", innerShowCode);
  window.location.href = "./startedQuest.html";
});
