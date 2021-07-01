/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ProjectList */ \"./src/modules/ProjectList.js\");\n/* harmony import */ var _modules_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    if (_modules_Storage__WEBPACK_IMPORTED_MODULE_2__.Storage.getProjectsFromStorage()) {\n        //handle retrieve from storage\n        \n        _modules_UI__WEBPACK_IMPORTED_MODULE_3__.UI.displayAllTodos();\n    } else {\n        const defaultProject = new _modules_Project__WEBPACK_IMPORTED_MODULE_1__.Project(\"default\", []);\n        _modules_ProjectList__WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects.push(defaultProject);    \n    }\n\n    _modules_UI__WEBPACK_IMPORTED_MODULE_3__.UI.handlePageLoad();\n})\n\n//# sourceURL=webpack://TOP-ToDo/./src/index.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectList */ \"./src/modules/ProjectList.js\");\n\n\nclass Project {\n  constructor(name, tasks = []) {\n    this.name = name;\n    this.tasks = tasks;\n  }\n\n  getName() {\n    return this.name;\n  }\n\n  setName(name) {\n    this.name = name;\n  }\n\n  addTaskToList(task) {\n    this.tasks.push(task);\n  }\n\n  removeTask(todo) {\n    const i = this.tasks.map((task) => {return task.title}).indexOf(todo.getTitle().toLowerCase());\n    this.tasks.splice(i, 1);\n  }\n\n  checkIfAlreadyExistsInProjectList() {\n    if (\n      _ProjectList__WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects.find((project) => {\n        return project.name === this.name;\n      })\n    ) {\n      return true;\n    }\n\n    return false;\n  }\n}\n\n\n//# sourceURL=webpack://TOP-ToDo/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/ProjectList.js":
/*!************************************!*\
  !*** ./src/modules/ProjectList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectList\": () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n\n\nclass ProjectList {\n    static activeProject = \"default\";\n    static projects = [];\n    \n    static getProjectNames = () => {\n       return ProjectList.projects.map( project => {return project.name});\n    }\n\n    static findProjectTaskList = (projectName) => {\n        const project = ProjectList.projects.find((proj) => {\n            return proj.name.toLowerCase() === projectName.toLowerCase();\n        })\n\n        return project.tasks;\n    }\n\n    static getActiveProject() {\n        return ProjectList.projects.find((proj) => {\n            return proj.name.toLowerCase() === ProjectList.activeProject.toLowerCase();\n        })\n    }\n\n    static addProject(proj) {\n        ProjectList.projects.push(proj);\n    }\n\n    static setActiveProject(name) {\n        ProjectList.activeProject = name;\n    }\n}\n\n//# sourceURL=webpack://TOP-ToDo/./src/modules/ProjectList.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Storage\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\n    static getProjectsFromStorage() {\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://TOP-ToDo/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/ToDo.js":
/*!*****************************!*\
  !*** ./src/modules/ToDo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDo\": () => (/* binding */ ToDo)\n/* harmony export */ });\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectList */ \"./src/modules/ProjectList.js\");\n\n\nclass ToDo {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n\n  getTitle() {\n    return this.title;\n  }\n\n  setTitle(title) {\n    this.title = title;\n  }\n\n  getDescription() {\n    return this.description;\n  }\n\n  setDescription(desc) {\n    this.description = desc;\n  }\n\n  getDueDate() {\n    return this.dueDate;\n  }\n\n  setDueDate(date) {\n    this.dueDate = date;\n  }\n\n  getPriority() {\n    return this.priority;\n  }\n\n  setPriority(priority) {\n    this.priority = priority;\n  }\n\n  checkIfAlreadyExistsInCurrentTaskList(newTitle) {\n    const taskList = _ProjectList__WEBPACK_IMPORTED_MODULE_0__.ProjectList.findProjectTaskList(_ProjectList__WEBPACK_IMPORTED_MODULE_0__.ProjectList.activeProject);\n\n    if (!newTitle) {\n      if (\n        taskList.find((todo) => {\n          return todo.title === this.title;\n        })\n      ) {\n        return true;\n      }\n\n      return false;\n    } else {\n      if (\n        taskList.find((todo) => {\n          return todo.title === newTitle;\n        })\n      ) {\n        return true;\n      }\n      return false;\n    }\n  }\n\n  update(t, d, dd, p) {\n    this.setTitle(t);\n    this.setDescription(d);\n    this.setDueDate(dd);\n    this.setPriority(p);\n  }\n}\n\n\n//# sourceURL=webpack://TOP-ToDo/./src/modules/ToDo.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDo */ \"./src/modules/ToDo.js\");\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectList */ \"./src/modules/ProjectList.js\");\n\n\n\n\nclass UI {\n  static handlePageLoad() {\n    UI.changeProjectNameInToDoSection(_ProjectList__WEBPACK_IMPORTED_MODULE_2__.ProjectList.activeProject);\n    UI.highlightActiveProjectName(_ProjectList__WEBPACK_IMPORTED_MODULE_2__.ProjectList.activeProject);\n    UI.addInitialEventListeners();\n  }\n\n  static changeProjectNameInToDoSection(name) {\n    const header = document.getElementById(\"todoProjectHeader\");\n    if (name === \"default\" || name === \"home\") {\n      header.textContent = \"Home\";\n    } else {\n      header.textContent = name;\n    }\n  }\n\n  static highlightActiveProjectName(name) {\n    if (!document.querySelector(\".activeProject\")) {\n      if (name === \"default\" || name === \"home\") {\n        document.getElementById(\"home\").classList.add(\"activeProject\");\n      } else {\n        document.getElementById(name).classList.add(\"activeProject\");\n      } \n    } else {\n      document.querySelector(\".activeProject\").classList.remove(\"activeProject\");\n      document.getElementById(name).classList.add(\"activeProject\");\n    }\n  }\n\n  static displayProjectTodos() {\n    const taskList = _ProjectList__WEBPACK_IMPORTED_MODULE_2__.ProjectList.findProjectTaskList(_ProjectList__WEBPACK_IMPORTED_MODULE_2__.ProjectList.activeProject);\n\n    taskList.forEach((todo) => {\n      const todoItem = UI.createToDoItem(todo);\n      document.querySelector(\".todos\").appendChild(todoItem);\n    });\n  }\n\n  static addInitialEventListeners() {\n    const addProjectBtn = document.getElementById(\"addProject\");\n    addProjectBtn.addEventListener(\"click\", () => {\n      UI.toggleAddProjectBtn();\n      UI.addProjectForm();\n    });\n\n    const addToDoBtn = document.getElementById(\"addTodo\");\n    addToDoBtn.addEventListener(\"click\", () => {\n      UI.clearToDos();\n      UI.todoForm(\"add\");\n    });\n\n    const homeList = document.getElementById(\"home\");\n    homeList.addEventListener(\"click\", () => {\n      UI.clearToDos();\n      UI.highlightActiveProjectName(\"home\");\n      _ProjectList__WEBPACK_IMPORTED_MODULE_2__.ProjectList.setActiveProject(\"default\");\n      UI.changeProjectNameInToDoSection(_ProjectList__WEBPACK_IMPORTED_MODULE_2__.ProjectList.activeProject);\n      UI.displayProjectTodos();\n      //maybe in the future: allow display of every To Do.\n      if (document.getElementById(\"addTodo\").classList.contains(\"hide\")) {\n        UI.toggleAddNewTodoBtn();\n      }\n    });\n\n    //maybe: display anything due today.\n    /*const todayList = document.getElementById(\"today\");\n    todayList.addEventListener(\"click\", () => {\n      //\n    });*/\n  }\n\n  static clearToDos() {\n    const todos = document.querySelector(\".todos\").children;\n    Array.from(todos).forEach((child) => child.remove());\n  }\n\n  static todoForm(mode, toDo) {\n    const todoForm = document.createElement(\"div\");\n    todoForm.className = \"todoForm\";\n    todoForm.id = \"todoForm\";\n\n    const form = document.createElement(\"form\");\n    form.id = \"addTodoForm\";\n    todoForm.appendChild(form);\n\n    [\n      { name: \"Title\", type: \"input\" },\n      { name: \"Description\", type: \"textarea\", resize: \"none\" },\n      { name: \"DueDate\", type: \"input\", inputType: \"date\" },\n      { name: \"Priority\", type: \"select\", options: [\"High\", \"Medium\", \"Low\"] },\n    ].forEach((object) => {\n      const label = document.createElement(\"label\");\n      label.htmlFor = object.name.toLowerCase();\n      label.textContent = object.name;\n      label.className = \"formLabel\";\n      form.appendChild(label);\n\n      const formField = document.createElement(object.type);\n      formField.id = object.name.toLowerCase();\n      formField.name = object.name.toLowerCase();\n      if (object.hasOwnProperty(\"inputType\")) {\n        formField.type = object.inputType;\n      }\n      if (object.hasOwnProperty(\"resize\")) {\n        formField.style.resize = object.resize;\n      }\n      formField.className = \"formField\";\n      if (object.type === \"select\") {\n        form.appendChild(formField);\n        for (let i = 0; i < object.options.length; i++) {\n          const option = document.createElement(\"option\");\n          option.value = object.options[i];\n          option.textContent = object.options[i];\n          formField.appendChild(option);\n        }\n      } else {\n        form.appendChild(formField);\n      }\n    });\n\n    if (mode === \"add\") {\n      const addBtn = document.createElement(\"button\");\n      addBtn.textContent = \"Add\";\n      addBtn.id = \"addNewTodo\";\n      addBtn.className = \"btn addTodo\";\n      addBtn.addEventListener(\"click\", (e) => {\n        e.preventDefault();\n        //grab the information from the form and store it in new todo\n        const newTodo = new _ToDo__WEBPACK_IMPORTED_MODULE_1__.ToDo(\n          document.getElementById(\"title\").value,\n          document.getElementById(\"description\").value,\n          document.getElementById(\"duedate\").value,\n          document.getElementById(\"priority\").value\n        );\n        //append new todo to screen with title as id\n        UI.handleAddUpdateBtnPress(mode, newTodo);\n      });\n      form.appendChild(addBtn);\n    } else if (mode === \"update\") {\n      const addBtn = document.createElement(\"button\");\n      addBtn.textContent = \"Update\";\n      addBtn.id = \"updateTodo\";\n      addBtn.className = \"btn addTodo\";\n      addBtn.addEventListener(\"click\", (e) => {\n        e.preventDefault();\n        UI.handleAddUpdateBtnPress(mode, toDo, [\n          document.getElementById(\"title\").value.trim(),\n          document.getElementById(\"description\").value,\n          document.getElementById(\"duedate\").value,\n          document.getElementById(\"priority\").value,\n        ]);\n      });\n      form.appendChild(addBtn);\n    }\n\n    if (!document.getElementById(\"todoForm\")) {\n      UI.toggleAddNewTodoBtn();\n      document.querySelector(\".todos\").appendChild(todoForm);\n      if (mode === \"update\") {\n        UI.populateTodoFields(toDo);\n      }\n    }\n  }\n\n  static createToDoItem = (todo) => {\n    const todoItem = document.createElement(\"div\");\n    todoItem.id = todo.title;\n    todoItem.className = \"todo\";\n    todoItem.innerHTML = `<div class=\"leftTodo\">\n      <i class=\"far fa-circle\"></i>\n      <p class=\"todoInfo\">${todo.title}</p>\n    </div>\n    <div class=\"rightTodo\">\n      <i class=\"fas fa-trash-alt text-p\"></i>\n    </div>`;\n    todoItem.addEventListener(\"click\", (e) => {\n      if (\n        e.target.classList.contains(\"fa-circle\") ||\n        e.target.classList.contains(\"fa-trash-alt\")\n      ) {\n        const proj = _ProjectList__WEBPACK_IMPORTED_MODULE_2__.ProjectList.getActiveProject();\n        proj.removeTask(todo);\n        e.target.parentNode.parentNode.remove();\n      }\n\n      if (\n        e.target.classList.contains(\"todoInfo\") ||\n        e.target.classList.contains(\"todo\") ||\n        e.target.classList.contains(\"leftTodo\")\n      ) {\n        UI.clearToDos();\n        UI.todoForm(\"update\", todo);\n      }\n    });\n\n    return todoItem;\n  };\n\n  static populateTodoFields(todo) {\n    document.getElementById(\"title\").value = todo.getTitle();\n    document.getElementById(\"description\").value = todo.getDescription();\n    document.getElementById(\"duedate\").value = todo.getDueDate();\n    document.getElementById(\"priority\").value = todo.getPriority();\n  }\n\n  static handleAddUpdateBtnPress(mode, todo, details) {\n    let success = false;\n\n    if (\n      mode === \"add\" &&\n      !todo.checkIfAlreadyExistsInCurrentTaskList() &&\n      todo.title !== \"\"\n    ) {\n      _ProjectList__WEBPACK_IMPORTED_MODULE_2__.ProjectList.getActiveProject().addTaskToList(todo);\n      success = true;\n    } else if (mode === \"update\") {\n      if (todo.getTitle() !== details[0]) {\n        if (\n          !todo.checkIfAlreadyExistsInCurrentTaskList(details[0].trim()) &&\n          details[0] !== \"\"\n        ) {\n          todo.update(details[0].trim(), details[1], details[2], details[3]);\n          success = true;\n        }\n      } else {\n        todo.update(details[0], details[1], details[2], details[3]);\n        success = true;\n      }\n    }\n\n    if (!success) {\n      alert(\"Please use a unique title.\");\n    } else {\n      UI.clearToDos();\n      UI.displayProjectTodos();\n      UI.toggleAddNewTodoBtn();\n    }\n  }\n\n  static toggleAddNewTodoBtn() {\n    document.getElementById(\"addTodo\").classList.toggle(\"hide\");\n  }\n\n  static toggleAddProjectBtn() {\n    document.getElementById(\"addProject\").classList.toggle(\"hide\");\n  }\n\n  static addProjectForm() {\n    const projectContainer = document.createElement(\"div\");\n    projectContainer.classList.add(\"projectContainer\");\n\n    const projName = document.createElement(\"input\");\n    projName.classList.add(\"projectInput\");\n    projectContainer.appendChild(projName);\n\n    const add = document.createElement(\"button\");\n    add.classList.add(\"btn\");\n    add.textContent = \"Add\";\n    add.id = \"newProj\";\n    add.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n      const newProject = new _Project__WEBPACK_IMPORTED_MODULE_0__.Project(\n        document.querySelector(\".projectInput\").value.trim()\n      );\n      if (\n        !newProject.checkIfAlreadyExistsInProjectList() &&\n        newProject.getName() !== \"\" &&\n        newProject.getName().toLowerCase() !== \"home\" &&\n        newProject.getName().toLowerCase() !== \"default\"\n      ) {\n        _ProjectList__WEBPACK_IMPORTED_MODULE_2__.ProjectList.addProject(newProject);\n        UI.clearProjectUIList();\n        UI.writeProjectsToUI();\n        UI.toggleAddProjectBtn();\n        UI.clearToDos();\n        UI.highlightActiveProjectName(newProject.name);\n        _ProjectList__WEBPACK_IMPORTED_MODULE_2__.ProjectList.setActiveProject(newProject.name);\n        UI.changeProjectNameInToDoSection(_ProjectList__WEBPACK_IMPORTED_MODULE_2__.ProjectList.activeProject);\n        if (document.getElementById(\"addTodo\").classList.contains(\"hide\")) {\n          UI.toggleAddNewTodoBtn();\n        }\n      } else {\n        alert(\"project exists or is blank\");\n      }\n    });\n    projectContainer.appendChild(add);\n\n    if (!document.querySelector(\".projectContainer\")) {\n      document.querySelector(\".projects\").appendChild(projectContainer);\n    }\n  }\n\n  static writeProjectsToUI() {\n    const projects = [..._ProjectList__WEBPACK_IMPORTED_MODULE_2__.ProjectList.projects];\n    projects.forEach((proj) => {\n      if (proj.getName() !== \"default\") {\n        const project = UI.createProjectElement(proj);\n        document.querySelector(\".projects\").appendChild(project);\n      }\n    });\n  }\n\n  static clearProjectUIList() {\n    const projects = document.querySelector(\".projects\").children;\n    Array.from(projects).forEach((child) => child.remove());\n  }\n\n  static createProjectElement(proj) {\n    const project = document.createElement(\"p\");\n    project.className = \"project\";\n    project.id = proj.getName();\n    project.textContent = proj.getName();\n    project.addEventListener(\"click\", () => {\n      UI.clearToDos();\n      UI.highlightActiveProjectName(proj.getName());\n      _ProjectList__WEBPACK_IMPORTED_MODULE_2__.ProjectList.setActiveProject(proj.getName());\n      UI.changeProjectNameInToDoSection(_ProjectList__WEBPACK_IMPORTED_MODULE_2__.ProjectList.activeProject);\n      UI.displayProjectTodos();\n      if (document.getElementById(\"addTodo\").classList.contains(\"hide\")) {\n        UI.toggleAddNewTodoBtn();\n      }\n    })\n\n    return project;\n  }\n}\n\n\n//# sourceURL=webpack://TOP-ToDo/./src/modules/UI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;