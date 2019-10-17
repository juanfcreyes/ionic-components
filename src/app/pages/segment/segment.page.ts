import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, {static: true}) ionSegment:IonSegment;
  publisher = '';
  superHeroes: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.ionSegment.value  = 'Everyone';
    this.publisher = '';
    this.superHeroes = this.dataService.getSuperHeroes();
  }

  segmentChanged(event) {
    this.ionSegment.value = this.publisher = event.detail.value;
    if (this.ionSegment.value === 'Everyone') {
      this.publisher = ''
    }
  }

}
