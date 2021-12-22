
export class IconsTask {

    constructor(parentE: HTMLElement) {
        // @ts-ignore
        this.parentE = document.querySelector(".todo") as HTMLElement;
        this.createIcons();
    }

    public createIcons() {
        let divI = document.createElement("div") as HTMLDivElement;
        divI.className = "icons";

        /**
         * Icons
         */
        let trash = document.createElement("i") as HTMLElement;
        trash.className = "fas fa-trash" ;
        trash.style.color = "#6675c6";
        // @ts-ignore
        trash.addEventListener('click',()=> this.delete(e));

        let eye = document.createElement("i") as HTMLElement;
        eye.className = "far fa-eye";
        // @ts-ignore
        eye.addEventListener('click', ()=> this.view(e));

        let more = document.createElement("i") as HTMLElement;
        more.className = "fas fa-plus";
        more.innerHTML = " Ajouter une tâche";
        more.style.color = "#c7c7c7";
        // @ts-ignore
        more.addEventListener('click', ()=> this.add(e));

        // @ts-ignore
        this.parentE.appendChild(divI);
        divI.appendChild(trash);
        divI.appendChild(eye);
        divI.appendChild(more);
    }

    /**
     * Action icons
     */
    // @ts-ignore
    public delete(e) {

    }

    // @ts-ignore
    public view(e) {

    }

    // @ts-ignore
    public add(e) {

    }

}