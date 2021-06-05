import { ProjectList } from "./ProjectList";
import { UI } from "./UI";

export class Project {
    constructor(name, tasks = []) {
        this.name = name;
        this.tasks = tasks;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    addTaskToList(task) {
        this.tasks.push(task);
    }

    removeTask(name) {
        this.tasks.splice(i,1);
    }
    
    static toDoExistsInProject(todoTitle) {
        const project = ProjectList.projects.find(proj => proj.name === UI.getActiveProject().toLowerCase());
        if (project.tasks.find(task => task.title.toLowerCase() === todoTitle.toLowerCase())) {
            return true;
        }
        return false;
    }
}