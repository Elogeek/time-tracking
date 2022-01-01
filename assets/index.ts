import Storage from "./ts/components/Storage";
import { v4 as uuidv4 } from 'uuid';

const uneConfig = Storage.getConfiguration('hello world');
console.log(uneConfig);


console.log(uuidv4());
uuidv4();