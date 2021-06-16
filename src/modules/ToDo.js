import { ProjectList } from "./ProjectList";

export class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getDescription() {
        return this.title;
    }

    setDescription(desc) {
        this.description = desc;
    }
    
    getDueDate() {
        return this.title;
    }

    setDueDate(date) {
        this.dueDate = date;
    }
    
    getPriority() {
        return this.title;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    checkIfAlreadyExistsInCurrentTaskList() {
        const taskList = ProjectList.findProjectTaskList(ProjectList.activeProject);

        if (taskList.find(todo => {
            return todo.title === this.title;
        })) {
            return true;
        }

        return false;
    }
}