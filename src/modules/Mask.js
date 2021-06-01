export const Mask = () => {
    const Mask = document.createElement("div");
    
    if (document.getElementById("mask")) {
        document.getElementById("mask").classList.toggle("hide");
    } else {
        const Mask = document.createElement("div");
        Mask.classList.add("mask");
        Mask.id = "mask";
        Mask.addEventListener("click", removeMask);

        return Mask;
    }
}

const removeMask = () => {
    const Mask = document.querySelector(".mask");
    Mask.classList.toggle("hide");
}