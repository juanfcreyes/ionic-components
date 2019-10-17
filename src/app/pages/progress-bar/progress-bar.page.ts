import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  percent = 0.5;

  constructor() { }

  ngOnInit() {
  }

  changeRange(event: any) {
    this.percent = event.detail.value / 100;
  }

}
