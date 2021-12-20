/**
 *  Class constructor project
 */
export default class Project {

    public titleName: string;
    public parent: HTMLElement;

    constructor( N: string) {
        this.parent = document.querySelector('.container') as HTMLElement;
        this.titleName = N;
        this.build();
    }


    /**
     *  Build a project
     */
    build() {

        let div = document.createElement('div');
        let divTitle = document.createElement('div');
        let h2 = document.createElement('h2');

        div.className = "project";
        divTitle.className = "title";
        this.parent.appendChild(div);
        div.appendChild(divTitle);
        divTitle.appendChild(h2);

    }

}


