import { Project } from './modules/Project';
import { ProjectList } from './modules/ProjectList';
import {UI} from './modules/UI'

document.addEventListener("DOMContentLoaded", () => {
    UI.addMainEvents();
    UI.defaultActiveProject();
    
    //to do: add logic to create the home project with every task in all local storage projects
    //else, start the projects from scratch.
    if (false) { 

    } else {
        const home = new Project("home", []);
        ProjectList.projects.push(home);
    }    
});