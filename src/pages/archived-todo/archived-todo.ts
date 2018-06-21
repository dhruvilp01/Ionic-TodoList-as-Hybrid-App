import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TodoProvider } from '../../providers/todo/todo';
/**
 * Generated class for the ArchivedTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archived-todo',
  templateUrl: 'archived-todo.html',
})
export class ArchivedTodoPage {

public archiveTodos = [];

  constructor(private todoService: TodoProvider,  public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.archiveTodos = this.todoService.getArchiveTodos();
  }

}
