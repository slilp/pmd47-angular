import { Component, OnInit } from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  listTask:Task[]=[];

  name:string;
  desc:string;

  constructor() { }
  
  ngOnInit(): void {
  }

  addTodo(){
    if(this.name.length>0){
      var data = new Task();
      data.id = this.listTask.length;
      data.name = this.name;
      data.description = this.desc;
      this.listTask.push(data);
      this.name="";
      this.desc="";
    }

  }

  SelectedTask(task:Task){
    let delIndex = this.listTask.findIndex(v=>v.id == task.id);
    this.listTask.splice(delIndex,1);
  }

}
