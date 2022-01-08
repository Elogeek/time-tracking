    /**
     * Construct modal window
     */
    function build() {
        let div = document.createElement("div") as HTMLDivElement;
        div.className = "overlay";
        div.style.background = "#303030";

        let divWindow = document.createElement("div") as HTMLDivElement;
        divWindow.className = "window-modal";
        divWindow.style.background = "white";

        let contentWindow = document.createElement("p");
        contentWindow.className ="content-window";

        div.appendChild(divWindow);
        divWindow.appendChild(contentWindow);
    }

    /**
     *  Display modal window
     */
    let btn = document.getElementById("viewBtn") as HTMLElement;
    btn.addEventListener("click", showModal);

    function showModal() {
        let window = document.querySelector(".overlay") as HTMLElement;
        window.style.display ="flex";
        // @ts-ignore
        window.showModal;
    }

    /**
     *  Hidden modal
     */
    function hiddenModal() {
        let window = document.querySelector(".overlay") as HTMLElement;
        window.style.display = "none";
    }



