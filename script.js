    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const response = document.getElementById("response");

    yesBtn.addEventListener("click", function() {
        response.innerHTML = "Yesssss!!!💖 I Love You Tianah😘";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    });

    noBtn.addEventListener("mouseover", function() {
        const x = Math.floor(Math.random() * window.innerWidth - 100);
        const y = Math.floor(Math.random() * window.innerHeight - 50);
        noBtn.style.position = "absolute";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";

    });
