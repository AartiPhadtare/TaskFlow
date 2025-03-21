import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor } from '@angular/common';
import { TaskComponent } from './tasks/task/task.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

users = DUMMY_USERS;
selectedUserId?: string;

onSelectUser(id:string){
  this.selectedUserId = id;
}

get selectedUser(){
  return this.users.find((user) => user.id === this.selectedUserId);
}
}
