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

  form.appendChild(addBtn);

  return todoForm;
};

/*
form
    <
*/
