import { generateId } from "../utils.js"

export default class Task {

  constructor(data) {

    this.taskDesc = data.taskDesc
    this.id = data.id || generateId()
  }

  get Template() {
    return /*html*/`
<p>${this.taskDesc}</p>
<button onclick="app.listController.deleteListItem('${this.id}')" class="btn btn-danger">Delete this Task</button>
`
  }


}