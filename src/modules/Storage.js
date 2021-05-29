export class Storage {
  //get projects from storage
  static getProjectsFromStorage() {
    return [
      {
        "name": "test 1",
        "tasks": [
            
        ],
      },
      {
        "name": "test 2",
        "tasks": [],
      },
      
    ];
    //return JSON.parse(localStorage.getItem("projects"));
  }
}
