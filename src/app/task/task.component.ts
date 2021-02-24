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
  OnSelected:EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  select(){
    this.OnSelected.emit(this.task);
  }

}
