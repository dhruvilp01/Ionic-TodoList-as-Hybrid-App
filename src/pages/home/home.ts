import { Component, Input } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';
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

  constructor(private toastController: ToastController, private todoService: TodoProvider, public navCtrl: NavController,private alertController: AlertController) {
    this.todos =this.todoService.getTodos();
  }

archiveTodo(todoIndex) {
  this.todoService.archiveTodo(todoIndex);
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

              addTodoAlert.onDidDismiss(()=> {
                let addTodoToast = this.toastController.create({
                  message: "Todo Added",
                  duration: 2000
                });
                addTodoToast.present();
              });
 
            } 
          }
        ]
    });
    addTodoAlert.present();
  }

  editTodo(todoIndex) {
    let editTodoAlert = this.alertController.create({
        title: "Edit TODO",
        message: "Edit Your TODO",
        inputs: [
          {
            type: "text",
            name: "editTodoInput",
            value: this.todos[todoIndex]
          }
        ],
        buttons: [
          {
            text: "Cancel"
          },
          {
            text: "Edit Todo",
            handler: (inputData)=> {
              let todoText;
              todoText = inputData.editTodoInput;
              this.todoService.editTodo(todoText, todoIndex);

              editTodoAlert.onDidDismiss(()=> {
                let editTodoToast = this.toastController.create({
                  message: "Todo Edited",
                  duration: 2000
                });
                editTodoToast.present();
              });
 
            } 
          }
        ]
    });
    editTodoAlert.present();
  }

}
