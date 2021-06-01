export const AddModal = (type) => {
    const AddModal = document.createElement("div");
    AddModal.classList.add("modal");

    const modalHeader = document.createElement("h2");
    modalHeader.classList.add("modalHeader");
    modalHeader.textContent = `Add ${type}`;
    AddModal.appendChild(modalHeader);

    const modalForm = document.createElement("form");
    AddModal.appendChild(modalForm);

    if (type === "ToDo") {
        //title
        const titleLabel = document.createElement("label");
        titleLabel.textContent = "Title";
        titleLabel.htmlFor = "title";
        titleLabel.classList.add("label");
        const titleInput = document.createElement("input");
        titleInput.placeholder = "I need to...";
        titleInput.classList.add("input");
        titleInput.id = "title";
        modalForm.appendChild(titleLabel);
        modalForm.appendChild(titleInput);

        //description
        const descriptionLabel = document.createElement("label");
        descriptionLabel.textContent = "Description";
        descriptionLabel.htmlFor = "description";
        descriptionLabel.classList.add("label");
        const descriptionInput = document.createElement("textarea");
        descriptionInput.placeholder = "Doing thing after doing other things...";
        descriptionInput.classList.add("textArea");
        descriptionInput.id = "description";
        modalForm.appendChild(descriptionLabel);
        modalForm.appendChild(descriptionInput);

        //due date
        const dueDateLabel = document.createElement("label");
        dueDateLabel.textContent = "Due Date";
        dueDateLabel.htmlFor = "dueDate";
        dueDateLabel.classList.add("label");
        const dueDateInput = document.createElement("input");
        dueDateInput.type = "date"
        dueDateInput.placeholder = "MM/DD/YY";
        dueDateInput.classList.add("input");
        dueDateInput.id = "dueDate";
        modalForm.appendChild(dueDateLabel);
        modalForm.appendChild(dueDateInput);

        //priority
        const priorityLabel = document.createElement("label");
        priorityLabel.textContent = "Priority";
        priorityLabel.htmlFor = "priority";
        priorityLabel.classList.add("label");
        modalForm.appendChild(priorityLabel);

        const prioritySelect = document.createElement("select");
        prioritySelect.id = "priority";
        prioritySelect.name = "priority";
        modalForm.appendChild(prioritySelect);

        const priorityOptions = ["High", "Medium", "Low"];
        for (let i = 0; i < priorityOptions.length; i++) {
            const option = document.createElement("option");
            option.value = priorityOptions[i];
            prioritySelect.appendChild(option);
        }

        //add button
        const addButton = document.createElement("button");
        addButton.classList.add("btn addTodo");
        addButton.value = "Add"
        
    }

    return AddModal;
}