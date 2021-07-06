import { ProjectList } from "./ProjectList";

export class Storage {
    static getProjectsFromStorage() {
        const projects = JSON.parse(localStorage.getItem("projects"));
        return projects;
    }

    static saveProjectsArrayToStorage() {
        localStorage.setItem("projects", JSON.stringify(ProjectList.projects));
    }
}
