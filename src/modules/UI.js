import { ToDo } from "./ToDo";
import { Project } from "./Project";
import { Storage } from "./Storage";
import { ProjectList } from "./ProjectList";
import { Modal } from "./Modal";

export class UI {
  static addEvents() {
    document.getElementById("addModalBtn").addEventListener("click", () => {
      document.querySelector(".main").appendChild(Modal("todo"));
    });
  }

  static defaultActiveProject() {
    const home = document.getElementById("home");
    home.classList.toggle("activeProject");

    const projectHeader = document.getElementById("todoProjectHeader");
    projectHeader.textContent = "Home";
  }

  static addToDoToList(todo) {
    const toDo = document.createElement("div");
    toDo.className = "todo";
    document.querySelector(".todos").appendChild(toDo);

    const left = document.createElement("div");
    left.className = "leftTodo";
    toDo.appendChild(left);

    const circle = document.createElement("i");
    circle.className = "far fa-circle";
    left.appendChild(circle);

    const title = document.createElement("p");
    title.className = "todoInfo";
    title.textContent = todo.title;
    left.appendChild(title);

    const right = document.createElement("div");
    right.className = "rightTodo";
    toDo.appendChild(right);

    const trash = document.createElement("i");
    trash.className = "fas fa-trash-alt text-p";
    right.appendChild(trash);
  }

  static getActiveProject() {
      const activeProject = document.querySelector(".activeProject").textContent;
      return activeProject;
  }

  static removeModal() {
    const modal = document.getElementById("mask");
    modal.remove();
  }
}
