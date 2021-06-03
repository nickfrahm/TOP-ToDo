import { todoForm } from "./todoForm";

export const Modal = (modalType) => {
  const Mask = document.createElement("div");
  console.log("clicked");
  if (document.getElementById("mask")) {
    document.getElementById("mask").classList.toggle("hide");
  } else {
    const Mask = document.createElement("div");
    Mask.classList.add("mask");
    Mask.id = "mask";
    Mask.addEventListener("click", removeMask);

    if (modalType === "todo") {
      Mask.appendChild(todoForm());
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
