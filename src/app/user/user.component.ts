import { Component, computed, EventEmitter, Input, output, Output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
// @Input({required:true}) id!:string;
// @Input({required:true}) avatar!: string;
// @Input({required:true}) name!: string;
@Input({required:true}) user!: User;
@Output() select = new EventEmitter<string>();
// select = output<string>();

onSelectUser(){
  this.select.emit(this.user.id);
}

imagePath(){ 
  return 'public/' + this.user.avatar;
}

}
