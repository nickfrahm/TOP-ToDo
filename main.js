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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\n\n_modules_UI__WEBPACK_IMPORTED_MODULE_0__.UI.addEvents();\n\n//# sourceURL=webpack://TOP-ToDo/./src/index.js?");

/***/ }),

/***/ "./src/modules/Mask.js":
/*!*****************************!*\
  !*** ./src/modules/Mask.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mask\": () => (/* binding */ Mask)\n/* harmony export */ });\nconst Mask = () => {\n    const Mask = document.createElement(\"div\");\n    \n    if (document.getElementById(\"mask\")) {\n        document.getElementById(\"mask\").classList.toggle(\"hide\");\n    } else {\n        const Mask = document.createElement(\"div\");\n        Mask.classList.add(\"mask\");\n        Mask.id = \"mask\";\n        Mask.addEventListener(\"click\", removeMask);\n\n        return Mask;\n    }\n}\n\nconst removeMask = () => {\n    const Mask = document.querySelector(\".mask\");\n    Mask.classList.toggle(\"hide\");\n}\n\n//# sourceURL=webpack://TOP-ToDo/./src/modules/Mask.js?");

/***/ }),

/***/ "./src/modules/Modal.js":
/*!******************************!*\
  !*** ./src/modules/Modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddModal\": () => (/* binding */ AddModal)\n/* harmony export */ });\nconst AddModal = (type) => {\n    const AddModal = document.createElement(\"div\");\n    AddModal.classList.add(\"modal\");\n\n    const modalHeader = document.createElement(\"h2\");\n    modalHeader.classList.add(\"modalHeader\");\n    modalHeader.textContent = `Add ${type}`;\n    AddModal.appendChild(modalHeader);\n\n    const modalForm = document.createElement(\"form\");\n    AddModal.appendChild(modalForm);\n\n    if (type === \"ToDo\") {\n        //title\n        const titleLabel = document.createElement(\"label\");\n        titleLabel.textContent = \"Title\";\n        titleLabel.htmlFor = \"title\";\n        titleLabel.classList.add(\"label\");\n        const titleInput = document.createElement(\"input\");\n        titleInput.placeholder = \"I need to...\";\n        titleInput.classList.add(\"input\");\n        titleInput.id = \"title\";\n        modalForm.appendChild(titleLabel);\n        modalForm.appendChild(titleInput);\n\n        //description\n        const descriptionLabel = document.createElement(\"label\");\n        descriptionLabel.textContent = \"Description\";\n        descriptionLabel.htmlFor = \"description\";\n        descriptionLabel.classList.add(\"label\");\n        const descriptionInput = document.createElement(\"textarea\");\n        descriptionInput.placeholder = \"Doing thing after doing other things...\";\n        descriptionInput.classList.add(\"textArea\");\n        descriptionInput.id = \"description\";\n        modalForm.appendChild(descriptionLabel);\n        modalForm.appendChild(descriptionInput);\n\n        //due date\n        const dueDateLabel = document.createElement(\"label\");\n        dueDateLabel.textContent = \"Due Date\";\n        dueDateLabel.htmlFor = \"dueDate\";\n        dueDateLabel.classList.add(\"label\");\n        const dueDateInput = document.createElement(\"input\");\n        dueDateInput.type = \"date\"\n        dueDateInput.placeholder = \"MM/DD/YY\";\n        dueDateInput.classList.add(\"input\");\n        dueDateInput.id = \"dueDate\";\n        modalForm.appendChild(dueDateLabel);\n        modalForm.appendChild(dueDateInput);\n\n        //priority\n        const priorityLabel = document.createElement(\"label\");\n        priorityLabel.textContent = \"Priority\";\n        priorityLabel.htmlFor = \"priority\";\n        priorityLabel.classList.add(\"label\");\n        modalForm.appendChild(priorityLabel);\n\n        const prioritySelect = document.createElement(\"select\");\n        prioritySelect.id = \"priority\";\n        prioritySelect.name = \"priority\";\n        modalForm.appendChild(prioritySelect);\n\n        const priorityOptions = [\"High\", \"Medium\", \"Low\"];\n        for (let i = 0; i < priorityOptions.length; i++) {\n            const option = document.createElement(\"option\");\n            option.value = priorityOptions[i];\n            prioritySelect.appendChild(option);\n        }\n\n        //add button\n        const addButton = document.createElement(\"button\");\n        addButton.classList.add(\"btn addTodo\");\n        addButton.value = \"Add\"\n        \n    }\n\n    return AddModal;\n}\n\n//# sourceURL=webpack://TOP-ToDo/./src/modules/Modal.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectList\": () => (/* binding */ ProjectList)\n/* harmony export */ });\nclass ProjectList {\n\n}\n\n//# sourceURL=webpack://TOP-ToDo/./src/modules/ProjectList.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Storage\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\n  //get projects from storage\n  static getProjectsFromStorage() {\n    \n  }\n}\n\n\n//# sourceURL=webpack://TOP-ToDo/./src/modules/Storage.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo */ \"./src/modules/ToDo.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectList */ \"./src/modules/ProjectList.js\");\n/* harmony import */ var _Mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Mask */ \"./src/modules/Mask.js\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal */ \"./src/modules/Modal.js\");\n\n\n\n\n\n\n\nclass UI {\n    static addTodoForm() {\n        document.querySelector(\".main\").appendChild((0,_Mask__WEBPACK_IMPORTED_MODULE_4__.Mask)());\n        document.getElementById(\"mask\").appendChild((0,_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal)());\n        console.log(\"addTodoForm\")\n    }\n    \n    static addEvents() {\n        document.querySelector(\".addTodo\").addEventListener(\"click\", UI.addTodoForm);\n    }\n}\n\n//# sourceURL=webpack://TOP-ToDo/./src/modules/UI.js?");

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