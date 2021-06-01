import {ToDo} from './ToDo';
import {Project} from './Project'
import {Storage} from './Storage'
import { ProjectList } from './ProjectList';
import {Mask} from './Mask';
import {Modal} from './Modal';

export class UI {
    static addTodoForm() {
        document.querySelector(".main").appendChild(Mask());
        document.getElementById("mask").appendChild(Modal());
        console.log("addTodoForm")
    }
    
    static addEvents() {
        document.querySelector(".addTodo").addEventListener("click", UI.addTodoForm);
    }
}