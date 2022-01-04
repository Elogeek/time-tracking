import { v4 as uuidv4 } from 'uuid';

/**
 * Constructor Storage
 */
export default class Storage {

    constructor(projectName: string, ident: string) {}

    /**
     * Create a key in the localstorage
     */
    public static createStore(key: string): Storage {
        // @ts-ignore
        localStorage.setItem(uuidv4());
        // @ts-ignore
        return Storage;
    }

    public get(key: string): Storage {
       // If key exist
        // @ts-ignore
        return Storage;
        // If not key exist alors
        Storage.createStore(uuidv4());
        // @ts-ignore
        return new Storage();

    }

    /**
     * Update modifs in the project
     * @param key
     */
    public update(key:string):void{}

    /**
     * Delete a task in the project
     * @param key
     */
    public delete(key:string):void{



    }

    /**
     * Clear Localstorage (click trash in the project) and delete project
     * @param key
     */
    public  static clear(key:string):void {
        // @ts-ignore
        let btnTrash = document.querySelector(".icons ").firstChild as HTMLElement;
        let containerProject = document.querySelector(".container-project") as HTMLDivElement;

        btnTrash.addEventListener("click", (ev => {
            localStorage.get(uuidv4());
            localStorage.clear();
            containerProject.remove();
            containerProject.style.display = "none";
        }))
    }

    /**
     * Config pour tous les projects
     * @param projectName
     * @param ident
     */
    public static getConfiguration(projectName: string, ident: string): Storage {
        // Vérifier si la clé existe dans le storage, si oui,
        // For random ident to be sure not to get the wrong project
        return new Storage(" ",uuidv4());
        // Si pas trouvé alors création d'une nouvelle configuration'
        //uuidv4();
        //return new Storage();


    }

}

