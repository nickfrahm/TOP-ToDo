import { ProjectList } from "./modules/ProjectList";
import { Project } from "./modules/Project";
import { Storage } from "./modules/Storage";
import { UI } from "./modules/UI";

document.addEventListener("DOMContentLoaded", () => {
  if (Storage.getProjectsFromStorage()) {
    //handle retrieve from storage
    Storage.recreateProjectObjects();
    UI.displayAllTodos();
    UI.writeProjectsToUI();
  } else {
    const defaultProject = new Project("default", []);
    ProjectList.projects.push(defaultProject);
  }

  UI.handlePageLoad();
  if (
    UI.getWindowSize() < 751 &&
    document.querySelector(".menu-icon-container").classList.contains("hide") &&
    !document.querySelector(".nav").classList.contains("hide")
  ) {
    document.querySelector(".menu-icon-container").classList.toggle("hide");
    document.querySelector(".nav").classList.toggle("hide");
  } else if (
    UI.getWindowSize() > 751 &&
    !document
      .querySelector(".menu-icon-container")
      .classList.contains("hide") &&
    document.querySelector(".nav").classList.contains("hide")
  ) {
    document.querySelector(".menu-icon-container").classList.toggle("hide");
    document.querySelector(".nav").classList.toggle("hide");
  } else if (
    UI.getWindowSize() > 751 &&
    !document
      .querySelector(".menu-icon-container")
      .classList.contains("hide") &&
    !document.querySelector(".nav").classList.contains("hide")
  ) {
    document.querySelector(".menu-icon-container").classList.toggle("hide");
  }
});
