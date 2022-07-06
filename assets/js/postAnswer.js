let allRight = document.querySelector("#allRight");

allRight.addEventListener("click", () => {
  let postAnswer1 = document.querySelector("#postAnswer1").value;
  let postAnswer2 = document.querySelector("#postAnswer2").value;
  let postAnswer3 = document.querySelector("#postAnswer3").value;
  let postAnswer4 = document.querySelector("#postAnswer4").value;
  sessionStorage.setItem("postAnswer1", postAnswer1);
  sessionStorage.setItem("postAnswer2", postAnswer2);
  sessionStorage.setItem("postAnswer3", postAnswer3);
  sessionStorage.setItem("postAnswer4", postAnswer4);
});
