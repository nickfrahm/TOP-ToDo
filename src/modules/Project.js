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
}