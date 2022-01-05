function CreateModal() {
    // @ts-ignore
    document.getElementById("#modal").showModal();
}

function showModal() {
     let window = document.getElementById("#modal") as HTMLElement;
        window.style.display = "flex";
}

//make overlay//
let over = document.getElementById("overlay");
document.querySelector("#button-open").addEventListener("click", function(e) {
    let monDiv = document.createElement('div');
    monDiv.style.position = "absolute";
    monDiv.style.top ="0";
    monDiv.style.left = "0";
    monDiv.style.zIndex = "10";
    monDiv.style.backgroundColor = "rgba(27,4,4,0.44)";
    monDiv.style.width = "100%";
    monDiv.style.height = "100vh";
    over.appendChild(monDiv)

    let div2 = document.createElement("div");
    div2.id = "window";
    div2.style.backgroundColor = "#6DD5FA";
    div2.style.visibility = 0.5;
    div2.style.position = "absolute";
    div2.style.zIndex = "15";
    div2.style.left = "30%";
    div2.style.height = "50vh";
    div2.style.width = "50%";
    div2.innerHTML = "  ";
    div2.style.fontWeight = "bold";
    over.appendChild(div2);

    /*my button*/
    let closed = document.createElement("button");
    closed.id = "button-close";
    closed.innerHTML = "Fermer";
    closed.style.zIndex = "15";
    div2.appendChild(closed);

    /*closed my window*/
    closed.addEventListener("click", function (event) {
        monDiv.remove();
        div2.remove();
    });
});