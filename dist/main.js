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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _modules_ProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ProjectList */ \"./src/modules/ProjectList.js\");\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    _modules_UI__WEBPACK_IMPORTED_MODULE_2__.UI.addEvents();\n    _modules_UI__WEBPACK_IMPORTED_MODULE_2__.UI.defaultActiveProject();\n    \n    //to do: add logic to create the home project with every task in all local storage projects\n    //else, start the projects from scratch.\n    if (false) {} else {\n        const home = new _modules_Project__WEBPACK_IMPORTED_MODULE_0__.Project(\"home\", []);\n        _modules_ProjectList__WEBPACK_IMPORTED_MODULE_1__.ProjectList.projects.push(home);\n    }    \n});\n\n//# sourceURL=webpack://TOP-ToDo/./src/index.js?");

/***/ }),

/***/ "./src/modules/Modal.js":
/*!******************************!*\
  !*** ./src/modules/Modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _todoForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoForm */ \"./src/modules/todoForm.js\");\n\n\nconst Modal = (modalType) => {\n  const Mask = document.createElement(\"div\");\n  console.log(\"clicked\");\n  if (document.getElementById(\"mask\")) {\n    document.getElementById(\"mask\").classList.toggle(\"hide\");\n  } else {\n    const Mask = document.createElement(\"div\");\n    Mask.classList.add(\"mask\");\n    Mask.id = \"mask\";\n    Mask.addEventListener(\"click\", removeMask);\n\n    if (modalType === \"todo\") {\n      Mask.appendChild((0,_todoForm__WEBPACK_IMPORTED_MODULE_0__.todoForm)());\n    }\n\n    return Mask;\n  }\n};\n\nconst removeMask = (e) => {\n  if (e.target.id === \"mask\") {\n    const Mask = document.querySelector(\".mask\");\n    Mask.classList.toggle(\"hide\");\n  }\n};\n\n\n//# sourceURL=webpack://TOP-ToDo/./src/modules/Modal.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(name, tasks = []) {\n        this.name = name;\n        this.tasks = tasks;\n    }\n\n    getName() {\n        return this.name;\n    }\n\n    setName(name) {\n        this.name = name;\n    }\n\n    addTaskToList(task) {\n        this.tasks.push(task);\n    }\n\n    removeTask(name) {\n        this.tasks.splice(i,1);\n    } \n}\n\n//# sourceURL=webpack://TOP-ToDo/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/ProjectList.js":
/*!************************************!*\
  !*** ./src/modules/ProjectList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectList\": () => (/* binding */ ProjectList)\n/* harmony export */ });\nclass ProjectList {\n    static projects = [];\n}\n\n//# sourceURL=webpack://TOP-ToDo/./src/modules/ProjectList.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Storage\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\n\n}\n\n\n//# sourceURL=webpack://TOP-ToDo/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/ToDo.js":
/*!*****************************!*\
  !*** ./src/modules/ToDo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDo\": () => (/* binding */ ToDo)\n/* harmony export */ });\nclass ToDo {\n    constructor(title, description, dueDate, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    }\n\n    getTitle() {\n        return this.title;\n    }\n\n    setTitle(title) {\n        this.title = title;\n    }\n\n    getDescription() {\n        return this.title;\n    }\n\n    setDescription(desc) {\n        this.description = desc;\n    }\n    \n    getDueDate() {\n        return this.title;\n    }\n\n    setDueDate(date) {\n        this.dueDate = date;\n    }\n    \n    getPriority() {\n        return this.title;\n    }\n\n    setPriority(priority) {\n        this.priority = priority;\n    }\n}\n\n//# sourceURL=webpack://TOP-ToDo/./src/modules/ToDo.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo */ \"./src/modules/ToDo.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectList */ \"./src/modules/ProjectList.js\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ \"./src/modules/Modal.js\");\n\n\n\n\n\n\nclass UI {\n  static addEvents() {\n    document.getElementById(\"addModalBtn\").addEventListener(\"click\", () => {\n      document.querySelector(\".main\").appendChild((0,_Modal__WEBPACK_IMPORTED_MODULE_4__.Modal)(\"todo\"));\n    });\n  }\n\n  static defaultActiveProject() {\n    const home = document.getElementById(\"home\");\n    home.classList.toggle(\"activeProject\");\n\n    const projectHeader = document.getElementById(\"todoProjectHeader\");\n    projectHeader.textContent = \"Home\";\n  }\n\n  static addToDoToList(todo) {\n    const toDo = document.createElement(\"div\");\n    toDo.className = \"todo\";\n    document.querySelector(\".todos\").appendChild(toDo);\n\n    const left = document.createElement(\"div\");\n    left.className = \"leftTodo\";\n    toDo.appendChild(left);\n\n    const circle = document.createElement(\"i\");\n    circle.className = \"far fa-circle\";\n    left.appendChild(circle);\n\n    const title = document.createElement(\"p\");\n    title.className = \"todoInfo\";\n    title.textContent = todo.title;\n    left.appendChild(title);\n\n    const right = document.createElement(\"div\");\n    right.className = \"rightTodo\";\n    toDo.appendChild(right);\n\n    const trash = document.createElement(\"i\");\n    trash.className = \"fas fa-trash-alt text-p\";\n    right.appendChild(trash);\n  }\n\n  static getActiveProject() {\n      const activeProject = document.querySelector(\".activeProject\").textContent;\n      return activeProject;\n  }\n\n  static removeModal() {\n    const modal = document.getElementById(\"mask\");\n    modal.remove();\n  }\n}\n\n\n//# sourceURL=webpack://TOP-ToDo/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/todoForm.js":
/*!*********************************!*\
  !*** ./src/modules/todoForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoForm\": () => (/* binding */ todoForm)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectList */ \"./src/modules/ProjectList.js\");\n/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDo */ \"./src/modules/ToDo.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI */ \"./src/modules/UI.js\");\n\n\n\n\n\nconst todoForm = () => {\n  const todoForm = document.createElement(\"div\");\n  todoForm.className = \"modal\";\n\n  const todoFormHeader = document.createElement(\"h2\");\n  todoFormHeader.textContent = \"Add a todo\";\n  todoForm.appendChild(todoFormHeader);\n\n  const form = document.createElement(\"form\");\n  form.id = \"addTodoForm\"\n  todoForm.appendChild(form);\n\n  [\n    { name: \"Title\", type: \"input\" },\n    { name: \"Description\", type: \"textarea\", resize: \"none\"},\n    { name: \"DueDate\", type: \"input\", inputType: 'date' },\n    { name: \"Priority\", type: \"select\", options: [\"High\", \"Medium\", \"Low\"] }\n  ].forEach((object) => {\n      const label = document.createElement(\"label\");\n      label.htmlFor = object.name.toLowerCase();\n      label.textContent = object.name;\n      label.className = \"formLabel\";\n      form.appendChild(label);\n\n      const formField = document.createElement(object.type);\n      formField.id = object.name.toLowerCase();\n      formField.name = object.name.toLowerCase();\n      if (object.hasOwnProperty('inputType')) {\n        formField.type = object.inputType;    \n      }\n      if (object.hasOwnProperty(\"resize\")) {\n          formField.style.resize = object.resize;\n      }\n      formField.className = \"formField\";\n      if (object.type === \"select\") {\n          form.appendChild(formField);\n          for (let i = 0; i < object.options.length; i++) {\n              const option = document.createElement(\"option\");\n              option.value = object.options[i];\n              option.textContent = object.options[i];\n              formField.appendChild(option);\n          }\n      } else {\n          form.appendChild(formField);\n      }\n  });\n\n  const addBtn = document.createElement('button');\n  addBtn.textContent = \"Add\";\n  addBtn.id = \"addTodo\";\n  addBtn.className = \"btn addTodo\";\n  addBtn.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    const newTask = new _ToDo__WEBPACK_IMPORTED_MODULE_2__.ToDo(\n        document.getElementById(\"title\").value,\n        document.getElementById(\"description\").value,\n        document.getElementById(\"duedate\").value,\n        document.getElementById(\"priority\").value\n    );\n    _UI__WEBPACK_IMPORTED_MODULE_3__.UI.addToDoToList(newTask);\n    _UI__WEBPACK_IMPORTED_MODULE_3__.UI.removeModal();\n\n    if (_UI__WEBPACK_IMPORTED_MODULE_3__.UI.getActiveProject() !== \"Home\") {\n        //to do: add logic to add task to custom project\n    } else {\n        _ProjectList__WEBPACK_IMPORTED_MODULE_1__.ProjectList.projects.find(project => project.name === \"home\").addTaskToList(newTask);\n    }\n  })\n  form.appendChild(addBtn);\n\n  return todoForm;\n};\n\n\n\n//# sourceURL=webpack://TOP-ToDo/./src/modules/todoForm.js?");

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