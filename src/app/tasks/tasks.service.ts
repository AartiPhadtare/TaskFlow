import { NewTaskData } from "./task/task.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class TasksService {
    private task = [
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
        },
        {
            id: '4',
            userId: 'u3',
            name: 'prepare issue template',
            Summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            DueDate: '2025-12-31'
           }
       ];

constructor(){
    const tasks = localStorage.getItem('tasks');

    if(tasks){
        this.task = JSON.parse(tasks);
    }
}
       getUserTasks(userId: string){
        return this.task.filter((task) => task.userId === userId);
       }

       addTask(taskData: NewTaskData, userId:string){
        this.task.push({
            id: new Date().getTime().toString(),
            userId: userId,
            name: taskData.title,
            Summary: taskData.summary,
            DueDate: taskData.date
          })
          this.saveTasks();
       }

       removeTask(id:string){
        this.task = this.task.filter((task) => task.id !== id);
        this.saveTasks();
       }

       private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.task));
       }
}
