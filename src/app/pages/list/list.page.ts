import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('userIonList', {static: false}) userIonList: IonList;
  users: Observable<any>;

  constructor(private dataService: DataService,
    public toastController: ToastController) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  delete(user) {
    this.presentToast('Deleted item');
    this.userIonList.closeSlidingItems();
  }

  favorite(user) {
    this.presentToast('Save in favorites');
    this.userIonList.closeSlidingItems();
  }

  share(user) {
    this.presentToast('Shared');
    this.userIonList.closeSlidingItems();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }


}
