import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LogEntity } from "../entities";
import { getBaseUrl } from "../../main";

@Injectable()
export class ConfigService {

  private baseUrl: string = null;

  readonly url: string = "./../../assets/data/config-data.json";
  readonly resUrl: string = "./../../assets/data/resource-data-cs.json";

  constructor(private http: HttpClient) {
    this.baseUrl = getBaseUrl();
  }
}
