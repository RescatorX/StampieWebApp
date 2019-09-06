import { Observable } from "rxjs";
import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StampEntity } from "../entities";
import { getBaseUrl } from "../../main";

@Injectable()
export class StampService {

  public allStamps: StampEntity[] = [];

  //https://www.turisticke-znamky.cz/export.php?item=1&type=csv
  private baseUrl: string = null;

  constructor(private http: HttpClient) {
    this.baseUrl = getBaseUrl();
  }

  public getStamps(): Observable<StampEntity[]> {
    return this.http.get<StampEntity[]>(this.baseUrl);
  }
}
