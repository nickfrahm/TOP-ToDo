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

  removeTask(todo) {
    const i = this.tasks.map((task) => {return task.title}).indexOf(todo.getTitle().toLowerCase());
    this.tasks.splice(i, 1);
  }

  static toDoExistsInProject(todoTitle) {
    const project = ProjectList.projects.find((proj) => proj.name === UI.getActiveProject().toLowerCase());

    if (project.tasks.find((task) => task.title.toLowerCase() === todoTitle.toLowerCase())) {
      return true;
    }
    return false;
  }

  static removeTodoFromProject(todo) {
    if (Project.toDoExistsInProject(todo.getTitle())) {
      const project = ProjectList.projects.find(
        (proj) => proj.name === UI.getActiveProject().toLowerCase()
      );
      project.tasks.find((task) => {
        if (task.title.toLowerCase() === todo.getTitle().toLowerCase()) {
          project.removeTask(task);
        }
      });
    }
  }
}
