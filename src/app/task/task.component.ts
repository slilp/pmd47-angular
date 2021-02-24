import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input()
  task:Task;
  
  @Output()
  OnSelected:EventEmitter<TaskComponent> = new EventEmitter();
  @Output()
  OnRemove:EventEmitter<TaskComponent> = new EventEmitter();

  constructor() { }

  isSelected:boolean=false;

  ngOnInit(): void {
  }

  remove(){
    this.OnRemove.emit(this);
  }

  select(){
    this.OnSelected.emit(this);
  }

}
