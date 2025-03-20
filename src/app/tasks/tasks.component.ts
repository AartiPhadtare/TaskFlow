import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required:true}) userId!: string; 
@Input({required:true}) name?:string;

task = [
 {
  id: "1", 
  userId: "u1", 
  name: "Task 1", 
  Summary: "Description 1", 
  DueDate: "2025-03-25" 
 },
 {
  id: "2", 
  userId: "u2", 
  name: "Task 2", 
  Summary: "Description 2", 
  DueDate: "2025-03-26" 
 },
 {
  id: '3',
  userId: 'u3',
  name: 'prepare issue template',
  Summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  DueDate: '2025-12-31'
 }
];

get selectedUserTasks(){
  return this.task.filter((task) => task.userId === this.userId)
}
}
