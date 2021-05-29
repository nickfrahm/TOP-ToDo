export class ProjectList {
    static projects = [];

    static addProjectToList(project) {
        ProjectList.projects.push(project);   
    }
}