import _listService from "../Services/ListService.js";
import _store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let lists = _store.State.lists
  let listElem = document.getElementById("list-row")
  let template = ""

  lists.forEach(list => {
    template += list.Template
  })
  listElem.innerHTML = template


}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems

  createList(event) {
    event.preventDefault()
    console.log("Form Submitted")
    let formData = event.target
    let newList = {
      listName: formData.listName.value
    }

    _listService._createList(newList)
    _drawLists()
  }

  deleteList(id) {
    event.preventDefault()
    _listService._deleteList(id)
    _drawLists()
  }

  createListItem(event) {
    event.preventDefault()

    let formData = event.target
    let newTask = formData.taskName.value
    _listService._createListItem(newTask)
    _drawLists()
  }

  deleteListItem() {
    event.preventDefault()
    _listService._deleteListItem()
    _drawLists()
  }
}
