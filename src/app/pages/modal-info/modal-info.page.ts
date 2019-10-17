import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() name: string;
  @Input() country: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  leaveNoArgs() {
    this.modalController.dismiss();
  }

  leaveArgs() {
    this.modalController.dismiss({
      name: 'Fernado',
      country: 'Ecuador'
    });
  }

}
