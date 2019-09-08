import { Observable } from "rxjs";
import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StampEntity, IStamp } from "../entities";
import { getBaseUrl } from "../../main";

@Injectable()
export class StampService {

  //@Inject('BASE_URL')
  private baseUrl: string;

  public allStamps: IStamp[] = [];

  constructor(private http: HttpClient) {
    this.baseUrl = getBaseUrl();
    if ((this.allStamps == null) || (this.allStamps.length == 0)) {
      this.getStamps();
    }
  }

  public getStamps() {
    this.http.get<IStamp[]>(this.baseUrl + 'api/Stamps/DownloadStamps').subscribe(stamps => {
      this.allStamps = new Array<StampEntity>(stamps.length);
      this.allStamps = [].concat(stamps);
    }, error => {
      this.allStamps = [];
      console.error(error);
    });
  }
}
