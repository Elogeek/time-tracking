
/**
 *  Class constructor project
 */

export class Project {
    parentE: HTMLDivElement;

    constructor(parentE: HTMLDivElement) {
        this.parentE = parentE;
        this.init();
        this.createTitle();
        this.createTasksList();
        this.timeClock();
        this.lastInteractionTracked();
        this.createIcons();
    }

    /**
     *  initialization project
     */
    init() {
        this.createTitle();
        this.createTasksList();
        this.createIcons();
        this.timeClock();
        this.lastInteractionTracked();
    }


    /**
     * Create title project
     */
    createTitle() {
        let input = document.querySelector("#inputTittle") as HTMLInputElement;
        let divInput = document.querySelector("span") as HTMLSpanElement;
        let array: string;
        array = input.value;
        divInput.innerHTML = input.value;
        console.log(array);
    }

    /**
     * Create tasks list project
     */
    createTasksList() {

        // chrono
    }

    /**
     * Create Icons project
     */
    createIcons() {
        let divI = document.createElement("div") as HTMLDivElement;
        divI.className = "icons";

        /**
         * Icons
         */
        let trash = document.createElement("i") as HTMLElement;
        trash.className = "fas fa-trash";
        trash.style.color = "#6675c6";
        // @ts-ignore
        trash.addEventListener('click', () => this.delete());

        let eye = document.createElement("i") as HTMLElement;
        eye.className = "far fa-eye";
        // @ts-ignore
        eye.addEventListener('click', () => this.view());

        let more = document.createElement("i") as HTMLElement;
        more.className = "fas fa-plus";
        more.innerHTML = " Ajouter une tâche";
        more.style.color = "#c7c7c7";
        // @ts-ignore
        more.addEventListener('click', () => this.add());

        // @ts-ignore
        this.parentE.appendChild(divI);
        divI.appendChild(trash);
        divI.appendChild(eye);
        divI.appendChild(more);

        /**
         * Action icons
         */
        // @ts-ignore
        delete(e)

        // @ts-ignore
        view(e)

        // @ts-ignore
        add(e)

    }

    /**
     * Calculate the total time spent on the project
     */
    timeClock() {

    }

    /**
     * Time of the last interaction (the tracked time)
     */
    lastInteractionTracked() {

    }

}

