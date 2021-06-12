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

}
