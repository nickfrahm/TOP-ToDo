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
}
