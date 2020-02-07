import List from "../Models/List.js";
import _store from "../store.js"
import Task from "../Models/Task.js";

//Public
class ListService {
  _createList(newList) {
    newList = new List(newList)
    _store.State.lists.push(newList)
    _store.saveState()
    console.log(_store.State.lists)
  }
  _deleteList(id) {
    let lists = _store.State.lists.filter(list => list.id !== id)
    _store.State.lists = lists
    _store.saveState()
  }
  _createListItem(newTask, taskId) {
    newTask = new Task(newTask)
    _store.State.lists.find(list => list.id === taskId)
    _store.State.lists
  }
  _deleteListItem() {
    throw new Error("Method not implemented.");
  }


  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
