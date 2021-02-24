import { Component, OnInit , ViewChildren , QueryList } from '@angular/core';
import {Task} from '../task';
import {TaskComponent} from '../task/task.component';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  @ViewChildren(TaskComponent)
  listTaskComponent:QueryList<TaskComponent>;

  listTask:Task[]=[];
  name:string;
  desc:string;

  taskShow:Task=new Task();

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

  DeletedTask(taskComp:TaskComponent){
    let delIndex = this.listTask.findIndex(v=>v.id == taskComp.task.id);
    this.listTask.splice(delIndex,1);
    
  }

  SelectedTask(taskComp:TaskComponent){
    this.listTaskComponent.forEach(v=>{
      v.isSelected = false;
    });

    this.taskShow.name = taskComp.task.name;
    this.taskShow.description = taskComp.task.description;

    taskComp.isSelected = true;

  }


}
