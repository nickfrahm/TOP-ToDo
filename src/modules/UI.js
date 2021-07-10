import { Project } from "./Project";
import { ToDo } from "./ToDo";
import { ProjectList } from "./ProjectList";
import { Storage } from "./Storage";

export class UI {
  static handlePageLoad() {
    UI.changeProjectNameInToDoSection(ProjectList.activeProject);
    UI.highlightActiveProjectName(ProjectList.activeProject);
    UI.addInitialEventListeners();
  }

  static changeProjectNameInToDoSection(name) {
    const header = document.getElementById("todoProjectHeader");
    if (name === "default" || name === "home") {
      header.textContent = "Home";
    } else {
      header.textContent = name;
    }
  }

  static highlightActiveProjectName(name) {
    if (!document.querySelector(".activeProject")) {
      if (name === "default" || name === "home") {
        document.getElementById("home").classList.add("activeProject");
      } else {
        document.getElementById(name).classList.add("activeProject");
      }
    } else {
      document
        .querySelector(".activeProject")
        .classList.remove("activeProject");
      document.getElementById(name).classList.add("activeProject");
    }
  }

  static displayProjectTodos(name = ProjectList.activeProject) {
    const taskList = ProjectList.findProjectTaskList(name);

    taskList.forEach((todo) => {
      const todoItem = UI.createToDoItem(todo);
      document.querySelector(".todos").appendChild(todoItem);
    });
  }

  static getWindowSize() {
    return window.innerWidth;
  }

  static addInitialEventListeners() {
    window.addEventListener("resize", () => {
      const menuBtn = document.querySelector(".menu-icon-container");

      if (UI.getWindowSize() < 751 && document.querySelector(".menu-icon-container").classList.contains("hide")) {
        document.querySelector(".menu-icon-container").classList.toggle("hide");
        const menuBtn = document.getElementById("menu-icon");
        menuBtn.addEventListener("click", () => {
          //open menu
        });
      } else if (UI.getWindowSize() > 751 && !document.querySelector(".menu-icon-container").classList.contains("hide")) {
        document.querySelector(".menu-icon-container").classList.toggle("hide");    
    }
    })

    const addProjectBtn = document.getElementById("addProject");
    addProjectBtn.addEventListener("click", () => {
      UI.toggleAddProjectBtn();
      UI.addProjectForm();
    });

    const addToDoBtn = document.getElementById("addTodo");
    addToDoBtn.addEventListener("click", () => {
      UI.clearToDos();
      UI.todoForm("add");
    });

    const homeList = document.getElementById("home");
    homeList.addEventListener("click", () => {
      UI.clearToDos();
      UI.highlightActiveProjectName("home");
      ProjectList.setActiveProject("default");
      UI.changeProjectNameInToDoSection(ProjectList.activeProject);
      UI.displayAllTodos();
      if (document.getElementById("addTodo").classList.contains("hide")) {
        UI.toggleAddNewTodoBtn();
      }
    });

    //maybe: display anything due today.
    /*const todayList = document.getElementById("today");
    todayList.addEventListener("click", () => {
      //
    });*/
  }

  static clearToDos() {
    const todos = document.querySelector(".todos").children;
    Array.from(todos).forEach((child) => child.remove());
  }

  static todoForm(mode, toDo) {
    const todoForm = document.createElement("div");
    todoForm.className = "todoForm";
    todoForm.id = "todoForm";

    const form = document.createElement("form");
    form.id = "addTodoForm";
    todoForm.appendChild(form);

    [
      { name: "Title", type: "input" },
      { name: "Description", type: "textarea", resize: "none" },
      { name: "DueDate", type: "input", inputType: "date" },
      { name: "Priority", type: "select", options: ["High", "Medium", "Low"] },
    ].forEach((object) => {
      const label = document.createElement("label");
      label.htmlFor = object.name.toLowerCase();
      label.textContent = object.name;
      label.className = "formLabel";
      form.appendChild(label);

      const formField = document.createElement(object.type);
      formField.id = object.name.toLowerCase();
      formField.name = object.name.toLowerCase();
      if (object.hasOwnProperty("inputType")) {
        formField.type = object.inputType;
      }
      if (object.hasOwnProperty("resize")) {
        formField.style.resize = object.resize;
      }
      formField.className = "formField";
      if (object.type === "select") {
        form.appendChild(formField);
        for (let i = 0; i < object.options.length; i++) {
          const option = document.createElement("option");
          option.value = object.options[i];
          option.textContent = object.options[i];
          formField.appendChild(option);
        }
      } else {
        form.appendChild(formField);
      }
    });

    if (mode === "add") {
      const addBtn = document.createElement("button");
      addBtn.textContent = "Add";
      addBtn.id = "addNewTodo";
      addBtn.className = "btn addTodo";
      addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        //grab the information from the form and store it in new todo
        const newTodo = new ToDo(
          document.getElementById("title").value,
          document.getElementById("description").value,
          document.getElementById("duedate").value,
          document.getElementById("priority").value,
          ProjectList.activeProject
        );
        //append new todo to screen with title as id
        UI.handleAddUpdateBtnPress(mode, newTodo);
      });
      form.appendChild(addBtn);
    } else if (mode === "update") {
      const addBtn = document.createElement("button");
      addBtn.textContent = "Update";
      addBtn.id = "updateTodo";
      addBtn.className = "btn addTodo";
      addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        UI.handleAddUpdateBtnPress(mode, toDo, [
          document.getElementById("title").value.trim(),
          document.getElementById("description").value,
          document.getElementById("duedate").value,
          document.getElementById("priority").value,
        ]);
      });
      form.appendChild(addBtn);
    }

    if (!document.getElementById("todoForm")) {
      UI.toggleAddNewTodoBtn();
      document.querySelector(".todos").appendChild(todoForm);
      if (mode === "update") {
        UI.populateTodoFields(toDo);
      }
    }
  }

  static createToDoItem = (todo) => {
    const todoItem = document.createElement("div");
    todoItem.id = todo.title;
    todoItem.className = "todo";
    todoItem.innerHTML = `<div class="leftTodo">
      <i class="far fa-circle"></i>
      <p class="todoInfo">${todo.title}</p>
    </div>
    <div class="rightTodo">
      <i class="fas fa-trash-alt text-p"></i>
    </div>`;
    todoItem.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("fa-circle") ||
        e.target.classList.contains("fa-trash-alt")
      ) {
        const proj = ProjectList.getProject(todo.getParent());
        proj.removeTask(todo);
        e.target.parentNode.parentNode.remove();
        Storage.saveProjectsArrayToStorage();
      }

      if (
        e.target.classList.contains("todoInfo") ||
        e.target.classList.contains("todo") ||
        e.target.classList.contains("leftTodo")
      ) {
        UI.clearToDos();
        UI.todoForm("update", todo);
      }
    });

    return todoItem;
  };

  static populateTodoFields(todo) {
    document.getElementById("title").value = todo.getTitle();
    document.getElementById("description").value = todo.getDescription();
    document.getElementById("duedate").value = todo.getDueDate();
    document.getElementById("priority").value = todo.getPriority();
  }

  static handleAddUpdateBtnPress(mode, todo, details) {
    let success = false;

    if (
      mode === "add" &&
      !todo.checkIfAlreadyExistsInCurrentTaskList() &&
      todo.title !== ""
    ) {
      ProjectList.getActiveProject().addTaskToList(todo);
      success = true;
    } else if (mode === "update") {
      if (todo.getTitle() !== details[0]) {
        if (
          !todo.checkIfAlreadyExistsInCurrentTaskList(details[0].trim()) &&
          details[0] !== ""
        ) {
          todo.update(details[0].trim(), details[1], details[2], details[3]);
          success = true;
        }
      } else {
        todo.update(details[0], details[1], details[2], details[3]);
        success = true;
      }
    }

    if (!success) {
      alert("Please use a unique title.");
    } else {
      UI.clearToDos();
      if (
        ProjectList.activeProject === "home" ||
        ProjectList.activeProject === "default"
      ) {
        UI.displayAllTodos();
      } else {
        UI.displayProjectTodos();
      }
      UI.toggleAddNewTodoBtn();
    }
    Storage.saveProjectsArrayToStorage();
  }

  static toggleAddNewTodoBtn() {
    document.getElementById("addTodo").classList.toggle("hide");
  }

  static toggleAddProjectBtn() {
    document.getElementById("addProject").classList.toggle("hide");
  }

  static addProjectForm() {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("projectContainer");

    const projName = document.createElement("input");
    projName.classList.add("projectInput");
    projectContainer.appendChild(projName);

    const add = document.createElement("button");
    add.classList.add("btn");
    add.textContent = "Add";
    add.id = "newProj";
    add.addEventListener("click", (e) => {
      e.preventDefault();
      const newProject = new Project(
        document.querySelector(".projectInput").value.trim()
      );
      if (
        !newProject.checkIfAlreadyExistsInProjectList() &&
        newProject.getName() !== "" &&
        newProject.getName().toLowerCase() !== "home" &&
        newProject.getName().toLowerCase() !== "default"
      ) {
        ProjectList.addProject(newProject);
        Storage.saveProjectsArrayToStorage();
        UI.clearProjectUIList();
        UI.writeProjectsToUI();
        UI.toggleAddProjectBtn();
        UI.clearToDos();
        UI.highlightActiveProjectName(newProject.name);
        ProjectList.setActiveProject(newProject.name);
        UI.changeProjectNameInToDoSection(ProjectList.activeProject);
        if (document.getElementById("addTodo").classList.contains("hide")) {
          UI.toggleAddNewTodoBtn();
        }
      } else {
        alert("project exists or is blank");
      }
    });
    projectContainer.appendChild(add);

    if (!document.querySelector(".projectContainer")) {
      document.querySelector(".projects").appendChild(projectContainer);
    }
  }

  static writeProjectsToUI() {
    const projects = ProjectList.projects//[...ProjectList.projects];
    projects.forEach((proj) => {
      if (proj.getName() !== "default") {
        const project = UI.createProjectElement(proj);
        document.querySelector(".projects").appendChild(project);
      }
    });
  }

  static clearProjectUIList() {
    const projects = document.querySelector(".projects").children;
    Array.from(projects).forEach((child) => child.remove());
  }

  static createProjectElement(proj) {
    const container = document.createElement("div");
    container.classList.add("projects__projectContainer");
    container.id = proj.getName() + "_container";
    container.addEventListener("click", (e) => {
      if (!e.target.classList.contains("fa-trash-alt")) {
        UI.clearToDos();
        UI.highlightActiveProjectName(proj.getName());
        ProjectList.setActiveProject(proj.getName());
        UI.changeProjectNameInToDoSection(ProjectList.activeProject);
        UI.displayProjectTodos();
        if (document.getElementById("addTodo").classList.contains("hide")) {
          UI.toggleAddNewTodoBtn();
        }
      } else {
        UI.removeProject(proj);
        ProjectList.removeProjectFromProjects(proj);
        UI.clearToDos();
        if (
          proj.getName().toLowerCase() ===
          ProjectList.activeProject.toLowerCase()
        ) {
          //clear and go to home project
          UI.highlightActiveProjectName("default");
          ProjectList.setActiveProject("default");
          UI.changeProjectNameInToDoSection("default");
          UI.displayAllTodos();
        } else {
          //refresh todos for active
          UI.displayProjectTodos();
        }
      }
      Storage.saveProjectsArrayToStorage();
    });

    const project = document.createElement("p");
    project.className = "project";
    project.id = proj.getName();
    project.textContent = proj.getName();

    const trash = document.createElement("i");
    trash.className = "fas fa-trash-alt text-p";

    container.appendChild(project);
    container.appendChild(trash);

    return container;
  }

  static displayAllTodos() {
    const projectNames = ProjectList.getProjectNames();

    projectNames.forEach((name) => {
      UI.displayProjectTodos(name);
    });
  }

  static removeProject(project) {
    const proj = document.getElementById(project.getName() + "_container");
    proj.remove();
  }
}
