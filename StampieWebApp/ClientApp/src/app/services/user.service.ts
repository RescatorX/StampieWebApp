import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserEntity } from "../entities";
import { getBaseUrl } from "../../main";

@Injectable()
export class UserService {

  private baseUrl: string = null;

  constructor(private http: HttpClient) {
    this.baseUrl = getBaseUrl();
  }
}
