    /**
     * Construct modal window
     */
    function build() {

        //make overlay
        let div = document.createElement("div") as HTMLDivElement;
        div.className = "overlay";
        div.style.background = "#303030";

        // make window modal
        let divWindow = document.createElement("div") as HTMLDivElement;
        divWindow.className = "window-modal";
        divWindow.style.background = "white";

        let contentWindow = document.createElement("p");
        contentWindow.className ="content-window";

        let btn = document.createElement("button");
        btn.innerHTML = "Closed";

        // Position the modal window
        div.appendChild(divWindow);
        divWindow.appendChild(contentWindow);
        contentWindow.append(btn);
    }

    /**
     *  Display modal window
     */
    let btn = document.getElementById("viewBtn") as HTMLElement;
    btn.addEventListener("click", showModal);

    function showModal() {
        let window = document.querySelector(".overlay") as HTMLElement;
        // @ts-ignore
        window.build();
        window.style.display ="flex";
        // @ts-ignore
        window.showModal;
    }

    /**
     *  Hidden modal
     */
    function destroyModal() {
        let window = document.querySelector(".overlay") as HTMLElement;
        window.style.display = "none";
    }



