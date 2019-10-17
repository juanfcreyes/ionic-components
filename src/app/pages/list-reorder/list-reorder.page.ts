import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  characters = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Super-Woman '];

  constructor() { }

  ngOnInit() {
  }

  reorder(event: any) {
    event.detail.complete();
    const item = this.characters.splice(event.detail.from,  1)[0];
    this.characters.splice(event.detail.to,  0, item);
  }

  save() {
    console.log(this.characters);
  }

}
null