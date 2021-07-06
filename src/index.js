import {ProjectList} from './modules/ProjectList';
import {Project} from './modules/Project';
import {Storage} from './modules/Storage';
import { UI } from './modules/UI';

document.addEventListener("DOMContentLoaded", () => {
    if (Storage.getProjectsFromStorage()) {
        //handle retrieve from storage
        ProjectList.projects = Storage.getProjectsFromStorage();
        UI.displayAllTodos();
        UI.writeProjectsToUI();
    } else {
        const defaultProject = new Project("default", []);
        ProjectList.projects.push(defaultProject);    
    }

    UI.handlePageLoad();
})