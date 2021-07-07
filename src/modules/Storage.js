import { ProjectList } from "./ProjectList";
import {Project} from "./Project";
import {ToDo} from "./ToDo";

export class Storage {
    static getProjectsFromStorage() {
        const projects = JSON.parse(localStorage.getItem("projects"));
        return projects;
    }

    static saveProjectsArrayToStorage() {
        localStorage.setItem("projects", JSON.stringify(ProjectList.projects));
    }

    static recreateProjectObjects() {
        const projList = Storage.getProjectsFromStorage();
        projList.forEach(proj => {
            const rebuiltTasks = Storage.recreateTaskObjects(proj.tasks);
            const project = new Project(proj.name, rebuiltTasks);
            ProjectList.projects.push(project);
        })
    }

    static recreateTaskObjects(tasks) {
        let rebuiltList = [];
        tasks.forEach(task => {
            const todo = new ToDo(task.title, task.description, task.dueDate, task.priority, task.parent);
            rebuiltList.push(todo);
        });
        return rebuiltList;
    }
}
