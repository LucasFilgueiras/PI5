let contador = 60;
setInterval(() => {
    let showTime = document.querySelector(".showTime");
    showTime.innerHTML = `Tempo: <br><br> ${contador--}`;
    if (contador <= 0) {
        window.location.href = "PI30.html";
    }
}, 1000);


