let attCode = document.querySelector(".button");

let i = 1;

attCode.addEventListener("click", () => {
  let showCode = document.querySelector(".showCode");
  showCode.innerHTML = i++;
});
