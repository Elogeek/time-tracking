import Project from "./components/project";
import Tokens from './components/Tokens';

const tokens = Tokens.getInstance();
tokens.setAccessToken('access-token');
const accessToken = tokens.getAccessToken();
tokens.clear();

let x = new Project( 'test');
x.build();
x.add();
