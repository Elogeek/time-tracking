// @ts-ignore
import {IconsTodo} from "./TodoTasks";

/**
 *  Class constructor project
 */
export class Project {

    public titleName: string;
    public parent: HTMLElement;

    constructor( N: string) {
        this.parent = document.querySelector('.container') as HTMLElement;
        this.titleName = N;
        this.build();
        this.add();
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

    add() {
        let btn = document.querySelector("#btnAdd") as HTMLButtonElement;
        let array =  [] = [localStorage.getItem('projects')];

            btn.addEventListener('click', function (e) {

                let input = document.querySelector('.inputTitle') as HTMLInputElement;

                input.addEventListener("keypress",(evt) => {

                    if(evt.key === 'Enter') {
                        let t = document.querySelector(".newTitle") as HTMLElement;
                        t.innerHTML = input.value;
                        console.log(input.value);
                        return t;
                    }

                    array.push(input.value);
                    localStorage.setItem('newProject',JSON.stringify(array));
                    // Here icons: trash, eye, add task
                    new IconsTodo();
                })

            })
        console.log('merde, une erreur est survenu !');
    }

}


