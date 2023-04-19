const quadrado = document.getElementById("quadrado");

quadrado.addEventListener("mouseover", ()=>{
    document.body.style.backgroundColor = "green";
});

quadrado.addEventListener("mouseout", ()=>{
    document.body.style.backgroundColor = "white";
});