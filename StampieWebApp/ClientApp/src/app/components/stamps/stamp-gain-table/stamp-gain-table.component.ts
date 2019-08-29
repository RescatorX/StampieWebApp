import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StampService } from '../../../services';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class StampGainTableComponent {

  constructor(private stampService: StampService) {
  }
}
