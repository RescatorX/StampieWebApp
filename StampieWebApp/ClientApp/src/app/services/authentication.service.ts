import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map'
//import { Observable } from 'rxjs/Observable';

import { LogService } from './log.service';
import { LogLevelEnum } from '../enums/log-level.enum';
import { ApiInfoEntity } from '../entities/api-info.entity';
import { ApiResponse } from '../entities/api-response.entity';
import { AuthResponse } from '../entities/auth-response.entity';
import { NetUtils } from '../utils/net.utils';
import * as globals from "../consts";

@Injectable()
export class AuthenticationService {

  // const 
  // private readonly SERVICE_URL_SELECT: string = globals.WCFServicesUrl + "AuthApi.svc/readall/1000";
  // private readonly SERVICE_URL_AUTHORIZE: string = globals.WCFServicesUrl + "authapi.svc/authorize";
/*
  private readonly SERVICE_URL_AUTHORIZE: string = globals.WCFServicesUrl + "auth";
  private readonly SERVICE_URL_READAPIINFO: string = globals.WCFServicesUrl + "auth";//"authapi.svc/readapiinfo?rev=";
*/
  public readonly LOCALSTORAGEKEY_CURRENTAUTH: string = "currentAuth";
  public readonly LOCALSTORAGEKEY_CURRENTUSER: string = "currentUser";
  public readonly LOCALSTORAGEKEY_LASTLOGGEDUSERNAME: string = "lastLoggedUsername";

  // props
  public loggedUser: any = undefined;
  public authToken: string = "";
  public permissions: string[];
  //public apiInfo: ApiInfoEntity = undefined;
  // public users: any[];

  // ctor
  constructor(public httpClient: HttpClient) { }
/*
  public ensureApiInfo() {
    let serviceUrl = this.SERVICE_URL_READAPIINFO;
    LogService.WriteObject(serviceUrl, "AuthenticationService - ensureApiInfo: start");
    if (this.apiInfo == undefined) {
      // let serviceUrl = this.SERVICE_URL_READAPIINFO + new Date().getTime().toString();
      // LogService.Write(serviceUrl);
      this.httpClient.get(serviceUrl).subscribe((data: ApiResponse) => {
        // var jsonData = data.json().ReadApiInfoResult;
        if (data.type > 100) {
          LogService.Write("AuthenticationService - ensureApiInfo: ErrorCode = " + data.type.toString() + ", ErrorMessage = " + data.message, LogLevelEnum.Error);
        }
        else {
          this.apiInfo = JSON.parse(data.json) || [];
        }
      });
    }
    else {
      LogService.WriteObject(this.apiInfo, "AuthenticationService - ensureApiInfo: api info already loaded. ");
    }
  }

  private handleResponse(response: AuthResponse, username: string) {
    // var data = res.json();
    LogService.WriteObject(response, "AuthenticationService - handleResponse: ");
    if (response.type == 101) {
      sessionStorage.setItem(this.LOCALSTORAGEKEY_CURRENTAUTH, JSON.stringify(response));
      sessionStorage.setItem(this.LOCALSTORAGEKEY_LASTLOGGEDUSERNAME, username);
      this.ensureData();
      return true;
    }
    else {
      // return false;
      throw "Neoprávněný přístup. ";
    }
  }

  public login(username: string, password: string): Observable<boolean> {
    LogService.Write("AuthenticationService - login: call auth on svc url - " + this.SERVICE_URL_AUTHORIZE);
    var body = { "login": username, "password": password };
    var options = NetUtils.getRequestOptions();
    return this.httpClient.post(this.SERVICE_URL_AUTHORIZE, body, options)
      .map((response: AuthResponse) => this.handleResponse(response, username),
        error => LogService.WriteObject(error, "AuthenticationService - login: Error occured during http call. ", LogLevelEnum.Error));
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem(this.LOCALSTORAGEKEY_CURRENTAUTH);
    sessionStorage.removeItem(this.LOCALSTORAGEKEY_CURRENTUSER);
    this.loggedUser = undefined;
  }

  public getLastLoggedUsername(): string {
    return sessionStorage.getItem(this.LOCALSTORAGEKEY_LASTLOGGEDUSERNAME);
  }

  ensureData() {
    LogService.Write("AuthenticationService - ensureData: start");
    LogService.WriteObject(this.loggedUser, "AuthenticationService - ensureData: loggedUser");
    LogService.WriteObject(this.permissions, "AuthenticationService - ensureData: permissions");
    if (this.loggedUser == undefined) {
      let currentAuthJson = sessionStorage.getItem(this.LOCALSTORAGEKEY_CURRENTAUTH);
      // LogService.WriteObject(currentAuthJson, "AuthenticationService - ensureData: currentAuthJson");
      if (currentAuthJson != undefined) {
        let currentAuth: AuthResponse = JSON.parse(currentAuthJson);
        if (currentAuth != undefined) {
          LogService.WriteObject(currentAuth, "AuthenticationService - ensureData: currentAuth");
          this.loggedUser = JSON.parse(currentAuth.userJson);
          this.authToken = currentAuth.authToken;
          this.permissions = currentAuth.permissionMask == undefined ? [] : currentAuth.permissionMask.split('|');
          LogService.WriteObject(this.loggedUser, "AuthenticationService - ensureData: loaded loggedUser");
          LogService.WriteObject(this.permissions, "AuthenticationService - ensureData: loaded permissions");
        }
        else {
          LogService.Write("AuthenticationService - ensureData: currentAuth is undefined");
        }
      }
      else {
        LogService.Write("AuthenticationService - ensureData: currentAuthJson is undefined");
      }
    }
    LogService.WriteObject(this.loggedUser);
  }
*/
  canActivate(): boolean {
    LogService.write("AuthenticationService - canActivate: start");
    var result = false;
    if (sessionStorage.getItem(this.LOCALSTORAGEKEY_CURRENTAUTH)) {
      let currentAuth: AuthResponse = JSON.parse(sessionStorage.getItem(this.LOCALSTORAGEKEY_CURRENTAUTH));

      // unauthorized or expired token
      if (currentAuth.type != 101 || new Date(currentAuth.expirationDate) < new Date()) {
        sessionStorage.removeItem(this.LOCALSTORAGEKEY_CURRENTUSER);
        sessionStorage.removeItem(this.LOCALSTORAGEKEY_CURRENTAUTH);
      }
      else {
        result = true;
      }
    }
    LogService.write("AuthenticationService - canActivate: result = " + result);
    return result;
  }

}
