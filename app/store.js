import List from "./Models/List.js";
import Task from "./Models/Task.js"

let _state = {
  /** @type {List[]} */
  lists: [],

};

//NOTE You should not need to change the code from this point down

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  try {
    let stateObj = JSON.parse(localStorage.getItem("TaskMaster"));
    _state.lists = stateObj.lists.map(l => {
      let list = new List(l)
      list.tasks = list.tasks.map(t => new Task(t))
      return list
    })
  } catch (e) {
  }
}

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }
}

_loadState();

const STORE = new Store();
export default STORE;
