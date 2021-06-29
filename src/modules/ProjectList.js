export class ProjectList {
    static activeProject = "default";
    static projects = [];
    
    static getProjectNames = () => {
       return ProjectList.projects.map( project => {return project.name});
    }

    static findProjectTaskList = (projectName) => {
        const project = ProjectList.projects.find((proj) => {
            return proj.name.toLowerCase() === projectName.toLowerCase();
        })

        return project.tasks;
    }

    static getActiveProject() {
        return ProjectList.projects.find((proj) => {
            return proj.name.toLowerCase() === ProjectList.activeProject.toLowerCase();
        })
    }

    static addProject(proj) {
        ProjectList.projects.push(proj);
    }

}