import { v4 as uuidv4 } from 'uuid';

/**
 * Constructor Storage
 */
export default class Storage {

    public get(key: string): void {

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
    public delete(key:string):void{}

    /**
     * Clear Localstorage (click trash in the project) and delete project
     * @param key
     */
    public clear(key:string):void{}

    /**
     * Config pour tous les projects
     * @param projectName
     */
    public static getConfiguration(projectName: string, ident: number): Storage
    {
        // Vérifier si la clé existe dans le storage, si oui,
        // For random ident to be sure not to get the wrong project
        return new Storage(uuidv4());
        console.log(uuidv4());



        // Si pas trouvé alors création d'une nouvelle configuration'
        //uuidv4();
        //return new Storage();


    }

}

