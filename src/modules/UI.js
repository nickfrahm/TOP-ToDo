import {ToDo} from './ToDo';
import {Project} from './Project'
import {Storage} from './Storage'

export class UI {
    static loadPage() {
        UI.addEvListeners();
        const projects = Storage.getProjectsFromStorage();
        console.log(projects);
        UI.writeProjectsToScreen(projects);
        UI.writeToDosToScreen();
    }

    static writeProjectsToScreen(projects) {
        projects.forEach(project => {
            const p = document.createElement("p");
            console.log(project.name)
            p.textContent = project.name;
            document.querySelector(".projects__header").after(p);
        })
    }

    static addEvListeners() {
        document.querySelector(".addProject").addEventListener("click", () => {
            Project.addProject();
            UI.addProjectToList();
        });

        document.querySelector(".addTodo").addEventListener("click", () => {
            
        });

    }
    
}