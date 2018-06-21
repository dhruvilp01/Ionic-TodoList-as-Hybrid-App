import { Component, Input } from '@angular/core';
import { NavController, AlertController, reorderArray } from 'ionic-angular';
import {TodoProvider} from '../../providers/todo/todo';

import { ArchivedTodoPage } from "../archived-todo/archived-todo";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todos = [];
  public reorderIsEnable = false;
  public archivedTodoPage = ArchivedTodoPage;

  constructor(private todoService: TodoProvider, public navCtrl: NavController,private alertController: AlertController) {
    this.todos =this.todoService.getTodos();
  }

  toggleReorder() {
    this.reorderIsEnable = !this.reorderIsEnable;
  }

  itemReordered($event) {
    reorderArray(this.todos, $event);
  }

  goToArchivePage() {
    this.navCtrl.push(ArchivedTodoPage);
  }

  openTodoAlert() {
    let addTodoAlert = this.alertController.create({
        title: "Add TODO",
        message: "Enter Your TODO",
        inputs: [
          {
            type: "text",
            name: "addTodoInput"
          }
        ],
        buttons: [
          {
            text: "Cancel"
          },
          {
            text: "Add Todo",
            handler: (inputData)=> {
              let todoText;
              todoText = inputData.addTodoInput;
              this.todoService.addTodo(todoText);
            } 
          }
        ]
    });
    addTodoAlert.present();
  }

}
