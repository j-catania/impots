import {Component, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {

  constructor(private appService: AppService,) {
  }

  ngOnInit(): void {
  }

}
