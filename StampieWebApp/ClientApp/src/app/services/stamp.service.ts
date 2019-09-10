import { Observable } from "rxjs";
import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StampEntity, IStamp } from "../entities";
import { getBaseUrl } from "../../main";
import { forEach } from "@angular/router/src/utils/collection";

@Injectable()
export class StampService {

  //@Inject('BASE_URL')
  private baseUrl: string;

  public allStamps: StampEntity[] = [];

  constructor(private http: HttpClient) {
    this.baseUrl = getBaseUrl();
  }

  public getStamps(): Observable<StampEntity[]> {
    return this.http.get<StampEntity[]>(this.baseUrl + 'api/Stamps/DownloadStamps');
  }
}
