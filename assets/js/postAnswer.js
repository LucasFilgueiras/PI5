let allRight = document.querySelector("#allRight");

allRight.addEventListener("click", async () => {
  let postAnswer1 = document.querySelector("#postAnswer1").value;
  let postAnswer2 = document.querySelector("#postAnswer2").value;
  let postAnswer3 = document.querySelector("#postAnswer3").value;
  let postAnswer4 = document.querySelector("#postAnswer4").value;
  sessionStorage.setItem("postAnswer1", postAnswer1);
  sessionStorage.setItem("postAnswer2", postAnswer2);
  sessionStorage.setItem("postAnswer3", postAnswer3);
  sessionStorage.setItem("postAnswer4", postAnswer4);

    let resposta1 = sessionStorage.getItem("postAnswer1");
    let resposta2 = sessionStorage.getItem("postAnswer2");
    let resposta3 = sessionStorage.getItem("postAnswer3");
    let resposta4 = sessionStorage.getItem("postAnswer4");
  
    let sendBD = {
      idquestao: 0,
      alternativa: [
        {
          texto: resposta1,
          correta: true
        },
        {
          texto: resposta2,
          correta: false
        },
        {
          texto: resposta3,
          correta: false
        },
        {
          texto: resposta4,
          correta: false
        }
      ],
    };
  
    await postMethod(sendBD, "/alternativa");
});



