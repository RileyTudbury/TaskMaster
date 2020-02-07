import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)

    this.listName = data.listName
    this.id = data.id || generateId();
    this.tasks = data.tasks || []
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {
    return /*html*/`
<div class="col-12">
<h1>${this.listName}</h1>

<form onsubmit="app.listController.createListItem(event)">
<div class="form-group">
  <label for="task-name">Enter a new task below</label>
  <input type="text" class="form-control" name="taskName" id="task-name" placeholder="Type new task here...">
  <button type="submit" class="btn btn-secondary">Create a New
    Task</button>
</div>
</form>


<button onclick="app.listController.deleteList('${this.id}')" class="btn btn-danger">Delete this List</button>
</div>



`
  }

}
