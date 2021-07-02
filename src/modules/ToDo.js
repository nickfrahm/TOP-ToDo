import { ProjectList } from "./ProjectList";

export class ToDo {
  constructor(title, description, dueDate, priority, parent) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.parent = parent;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getDescription() {
    return this.description;
  }

  setDescription(desc) {
    this.description = desc;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(date) {
    this.dueDate = date;
  }

  getPriority() {
    return this.priority;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  getParent() {
    return this.parent;
  }

  setParent(parent) {
    this.parent = parent;
  }

  checkIfAlreadyExistsInCurrentTaskList(newTitle) {
    const taskList = ProjectList.findProjectTaskList(ProjectList.activeProject);

    if (!newTitle) {
      if (
        taskList.find((todo) => {
          return todo.title === this.title;
        })
      ) {
        return true;
      }

      return false;
    } else {
      if (
        taskList.find((todo) => {
          return todo.title === newTitle;
        })
      ) {
        return true;
      }
      return false;
    }
  }

  update(t, d, dd, p) {
    this.setTitle(t);
    this.setDescription(d);
    this.setDueDate(dd);
    this.setPriority(p);
  }
}
