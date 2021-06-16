import { Project } from "./Project";
import { ToDo } from "./ToDo";
import { ProjectList } from "./ProjectList";

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
    if (name === "default" || name === "home") {
      document.getElementById("home").classList.add("activeProject");
    } else {
      document.getElementById(name).classList.add("activeProject");
    }
  }

  static displayAllToDos() {
    const taskList = ProjectList.findProjectTaskList(ProjectList.activeProject);

    taskList.forEach((todo) => {
      const todoItem = UI.createToDoItem(todo);
      document.querySelector(".todos").appendChild(todoItem);
    });
  }

  static addInitialEventListeners() {
    const addProjectBtn = document.getElementById("addProject");
    addProjectBtn.addEventListener("click", () => {
      //
    });

    const addToDoBtn = document.getElementById("addTodo");
    addToDoBtn.addEventListener("click", () => {
      UI.clearToDos();
      UI.todoForm("add");
    });

    const homeList = document.getElementById("home");
    homeList.addEventListener("click", () => {
      UI.displayAllToDos();
      UI.changeProjectNameInToDoSection("home");
      UI.highlightActiveProjectName("home");
    });

    const todayList = document.getElementById("today");
    todayList.addEventListener("click", () => {
      //
    });
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
          document.getElementById("priority").value
        );
        //append new todo to screen with title as id
        if (!newTodo.checkIfAlreadyExistsInCurrentTaskList() && newTodo.title !== "") {
          ProjectList.getActiveProject().addTaskToList(newTodo);
          UI.clearToDos();
          UI.displayAllToDos();
          UI.toggleAddNewTodoBtn();
        } else {
          alert("Please add a unique title.")
        }
      });
      form.appendChild(addBtn);
    } else if (mode === "update") {
      const addBtn = document.createElement("button");
      addBtn.textContent = "Update";
      addBtn.id = "updateTodo";
      addBtn.className = "btn addTodo";
      addBtn.addEventListener("click", (e) => {
        e.preventDefault();
      });
      form.appendChild(addBtn);
    }

    if (!document.getElementById("todoForm")) {
      UI.toggleAddNewTodoBtn();
      document.querySelector(".todos").appendChild(todoForm);
    }
  }

  static createToDoItem = (todo) => {
    const todoItem = document.createElement("div");
    todoItem.id = todo.title;
    todoItem.className = "todo";
    todoItem.innerHTML = 
    `
    <div class="leftTodo">
      <i class="far fa-circle"></i>
      <p class="todoInfo">${todo.title}</p>
    </div>
    <div class="rightTodo">
      <i class="fas fa-trash-alt text-p"></i>
    </div>
      `;

      return todoItem;
  }

  static toggleAddNewTodoBtn() {
    document.getElementById("addTodo").classList.toggle("hide");
  }
}
