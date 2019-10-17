import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  items: any;
  pattern: '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.pattern = '';
    this.items = this.dataService.getItems();
  }

  search(event) {
    this.pattern = event.detail.value;
  }

}
