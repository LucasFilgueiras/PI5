let goQuest = document.querySelector("#goQuest");

goQuest.addEventListener("click", () => {
  let getCode = sessionStorage.getItem("CodeRoom");
  let enterCode = document.querySelector(".enterCode");
  let enterCodeValue = enterCode.value;

  if (enterCodeValue == getCode) {
    window.location.href = "./quest.html";
  } else if (enterCodeValue != getCode) {
    window.alert("Código da sala incorreto!");
  } else if (enterCodeValue == "") {
    window.alert("Insira um código!");
  }
});
