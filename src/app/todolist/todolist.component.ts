import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  listTodo:string[]=[];
  todo:string='';
  constructor() { }
  
  ngOnInit(): void {
  }

  addTodo(){
    if(this.todo.length>0){
      this.listTodo.push(this.todo);
      this.todo="";
    }

  }

  deleteTodo(index){
    this.listTodo.splice(index,1);
  }

}
