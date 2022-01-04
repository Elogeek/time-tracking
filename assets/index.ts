// import Storage from "./ts/components/Storage";
import { v4 as uuidv4 } from 'uuid';
import Project from "./ts/components/Project";

//const uneConfig = Storage.getConfiguration('hello world',uuidv4());

// Test du module uuid
console.log(uuidv4());

// Test
Project.init();
