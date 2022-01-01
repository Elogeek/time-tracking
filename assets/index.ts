import Storage from "./ts/components/Storage";
import { v4 as uuidv4 } from 'uuid';

const uneConfig = Storage.getConfiguration('hello world');

// Test du module uuid
console.log(uuidv4());
