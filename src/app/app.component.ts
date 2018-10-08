import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "todoangular";
  todos:Array<string>
  constructor(){
    this.todos = []
  }
  catchTask(e) {
    this.todos = e
    console.log(this.todos);
  }
}
