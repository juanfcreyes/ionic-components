import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: Observable<WidgetComponent[]>;

  constructor(private menuController: MenuController,
    private dataService: DataService) {

  }

  ngOnInit() {
    this.components = this.dataService.getMenuOpts();
    console.log(this.components);
  }

  toggleMenu() {
    this.menuController.toggle();
  }

}
