import { todoForm } from "./todoForm";
import { UI } from "./UI";

export const Modal = (modalType, todo) => {
  if (document.getElementById("mask")) {
    document.getElementById("mask").classList.toggle("hide");
    UI.populateTodoForm(todo);
  } else {
    const Mask = document.createElement("div");
    Mask.classList.add("mask");
    Mask.id = "mask";
    Mask.addEventListener("click", removeMask);

    if (modalType === "todo") {
      Mask.appendChild(todoForm(todo));
    } 

    return Mask;
  }
};

const removeMask = (e) => {
  if (e.target.id === "mask") {
    const Mask = document.querySelector(".mask");
    Mask.classList.toggle("hide");
  }
};
