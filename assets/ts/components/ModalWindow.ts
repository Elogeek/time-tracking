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
        btn.className = "closed-window"
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
    let closedWindow = document.querySelector(".closed-window") as HTMLButtonElement;
    closedWindow.addEventListener("click", destroyModal);

    function destroyModal() {
        let window = document.querySelector(".overlay") as HTMLElement;
        window.style.display = "none";
    }

    /**
     *  Add item in the taskList
     */
    function addItemTaskList() {
        let more = document.getElementById("moreBtn") as HTMLElement;
        more.addEventListener("click", showModal);

        let content = document.querySelector(".content-window") as HTMLElement;
        let input = document.createElement("input") as HTMLInputElement;
        input.placeholder = "New work...";
        let btn = document.createElement("button") as HTMLButtonElement;
        btn.innerHTML = "Ajouter dans ma liste";

        content.append(input);
        content.append(btn);

    }



