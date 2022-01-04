
/**
 *  Class constructor project
 */
export default class Project {
    parentE: HTMLDivElement;

    constructor(parentE: HTMLDivElement) {
        this.parentE = parentE;
        // @ts-ignore
        this.init();
        // @ts-ignore
        this.createForm();
        // @ts-ignore
        this.createInput();
        // @ts-ignore
        this.createTitle();
        // @ts-ignore
        this.createTitle();
        //this.createTasksList();
        //this.timeClock();
        //this.lastInteractionTracked();
        //this.createIcons();
    }

    /**
     *  initialization project
     */
    static init() {
        this.createForm();
        this.createInput();
        this.createTitle();
        //his.createTasksList();
        //this.createIcons();
        //this.timeClock();
        //this.lastInteractionTracked();
    }

    static createForm(){
        let divForm = document.createElement('div');
        divForm.id = 'divForm';
        let form = document.createElement('form');
        form.className = 'form';

        // @ts-ignore
        this.parentE.append(divForm);
        divForm.append(form);
    }

    static createInput() {
        let divInput = document.createElement("div");
        let input = document.createElement("input");
        let submit = document.createElement("input");
        let form = document.querySelector(".form");

        input.type = "text";
        input.placeholder = "Ajouter un projet";
        input.id = "projectName";

        submit.id = "add";
        submit.type = "submit";
        submit.name = "submit";
        submit.value = "Ajouter";

        // @ts-ignore
        form.append(divInput);
        divInput.append(input);
        divInput.append(submit);

    }

    /**
     * Create title project
     */
    static createTitle() {
        let divTitle = document.querySelector(".titleProject span") as HTMLElement;
        let input = document.querySelector("#inputTitle") as HTMLInputElement;
        let arrayTitle: string = <string>localStorage.getItem("projectName");
        if(!arrayTitle) {
            // @ts-ignore
            arrayTitle = [];
        }
        else {
            arrayTitle = JSON.parse(arrayTitle);
        }

        for(const title of arrayTitle) {
            arrayTitle = input.value;
            divTitle.innerHTML = input.value;
            console.log(arrayTitle);
        }


    }

    /**
     * Create tasks list project

    createTasksList() {
        let div = document.querySelector(".content-right") as HTMLDivElement;
        let todosTasks = localStorage.getItem("todosTasks");



        // chrono
    }

    /**
     * Create Icons project

    createIcons() {
        let divI = document.createElement("div") as HTMLDivElement;
        divI.className = "icons";

        /**
         * Icons

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

        // @ts-ignore
        delete(e)

        // @ts-ignore
        view(e)

        // @ts-ignore
        add(e)

    }

    /**
     * Calculate the total time spent on the project

    timeClock() {

    }

    /**
     * Time of the last interaction (the tracked time)

    lastInteractionTracked() {

    }
    */
}

