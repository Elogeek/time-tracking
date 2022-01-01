import Storage from "./ts/components/Storage";
import { v4 as uuidv4 } from 'uuid';

const uneConfig = Storage.getConfiguration('hello world',uuidv4());

// Test du module uuid
console.log(uuidv4());

// Test
let a = document.querySelector(".container-project") as HTMLDivElement;
// @ts-ignore
a = Storage.clear();