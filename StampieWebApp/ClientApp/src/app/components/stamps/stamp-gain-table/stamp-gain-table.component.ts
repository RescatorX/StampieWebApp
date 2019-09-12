import { Component, Inject, OnInit } from '@angular/core';
import { StampService } from '../../../services';
import { StampEntity } from '../../../entities';
import { SortByPipe } from '../../../pipes';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-stamp-gain-table',
  styleUrls: ['./stamp-gain-table.component.scss'],
  templateUrl: './stamp-gain-table.component.html'
})
export class StampGainTableComponent implements OnInit {

  public searchText: string = "";
  public allStamps: StampEntity[] = [];
  public stamps: StampEntity[] = [];

  constructor(private stampService: StampService, public sortBy: SortByPipe) {
  }

  ngOnInit() {
    this.stampService.getStamps().subscribe(stamps => {
      let newStamps = new Array<StampEntity>();
      stamps.forEach(stamp => {
        stamp.gained = false;
        newStamps.push(new StampEntity(stamp));
      });
      this.allStamps = newStamps;
      this.stamps = newStamps;
      of(newStamps);
    }, error => {
      this.stamps = [];
      console.error(error);
    });
  }

  addGained(stamp: StampEntity) {
    //this.stamps.filter(s => s.id == stamp.id)[0].gained = true;
    stamp.gained = true;
  }

  removeGained(stamp: StampEntity) {
    //this.stamps.filter(s => s.id == stamp.id)[0].gained = false;
    stamp.gained = false;
  }

  searchTextChanged(event) {
    if (this.searchText.length >= 3) {
      this.stamps = this.allStamps.filter(s => s.name.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0);
    }

    if (this.searchText.length == 0) {
      this.stamps = this.allStamps;
    }
  }
}
