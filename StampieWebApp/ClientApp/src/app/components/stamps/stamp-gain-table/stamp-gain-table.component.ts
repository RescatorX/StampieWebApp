import { Component, Inject } from '@angular/core';
import { StampService } from '../../../services';
import { StampEntity } from '../../../entities';

@Component({
  selector: 'app-stamp-gain-table',
  templateUrl: './stamp-gain-table.component.html'
})
export class StampGainTableComponent {

  public stamps: StampEntity[] = [];

  constructor(private stampService: StampService) {
    this.stamps = this.stampService.allStamps;
  }
}
