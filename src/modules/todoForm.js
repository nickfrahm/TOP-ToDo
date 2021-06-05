import { Project } from "./Project";
import { ProjectList } from "./ProjectList";
import { ToDo } from "./ToDo";
import { UI } from "./UI";

export const todoForm = () => {
  const todoForm = document.createElement("div");
  todoForm.className = "modal";

  const todoFormHeader = document.createElement("h2");
  todoFormHeader.textContent = "Add a todo";
  todoForm.appendChild(todoFormHeader);

  const form = document.createElement("form");
  form.id = "addTodoForm"
  todoForm.appendChild(form);

  [
    { name: "Title", type: "input" },
    { name: "Description", type: "textarea", resize: "none"},
    { name: "DueDate", type: "input", inputType: 'date' },
    { name: "Priority", type: "select", options: ["High", "Medium", "Low"] }
  ].forEach((object) => {
      const label = document.createElement("label");
      label.htmlFor = object.name.toLowerCase();
      label.textContent = object.name;
      label.className = "formLabel";
      form.appendChild(label);

      const formField = document.createElement(object.type);
      formField.id = object.name.toLowerCase();
      formField.name = object.name.toLowerCase();
      if (object.hasOwnProperty('inputType')) {
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

  const addBtn = document.createElement('button');
  addBtn.textContent = "Add";
  addBtn.id = "addTodo";
  addBtn.className = "btn addTodo";
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const newTitle =document.getElementById("title").value
    const newTask = new ToDo(
        newTitle,
        document.getElementById("description").value,
        document.getElementById("duedate").value,
        document.getElementById("priority").value
    );
    if (Project.toDoExistsInProject(newTitle) || newTitle.trim() === "") {
        //add alert and prevent add.
    } else {
        UI.addToDoToList(newTask);
        UI.removeModal();
    
        if (UI.getActiveProject() !== "Home") {
            //to do: add logic to add task to custom project
            
            //to do: add logic to add task to home as well.
        } else {
            ProjectList.projects.find(project => project.name === "home").addTaskToList(newTask);
        }
    }

  })
  form.appendChild(addBtn);

  return todoForm;
};

