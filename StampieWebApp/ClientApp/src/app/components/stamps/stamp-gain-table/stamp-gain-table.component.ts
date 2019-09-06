import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StampService } from '../../../services';

@Component({
  selector: 'app-stamp-gain-table',
  templateUrl: './stamp-gain-table.component.html'
})
export class StampGainTableComponent {

  constructor(private stampService: StampService) {
  }
}
