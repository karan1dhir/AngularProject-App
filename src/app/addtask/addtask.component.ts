import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-addtask",
  templateUrl: "./addtask.component.html",
  styleUrls: ["./addtask.component.css"]
})
export class AddtaskComponent implements OnInit {
  todos:Array<string>
  @Output() todoGet = new EventEmitter();
  constructor() {
    this.todos=[]
  }
  ngOnInit() {}
  AddTask(name) {
    this.todos.push(name)
    console.log(this.todos)
    this.getTodos(this.todos)
  }
  getTodos(todos){
    this.todoGet.emit(todos)
  }
}
