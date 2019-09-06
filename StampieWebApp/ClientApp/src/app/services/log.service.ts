import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LogEntity } from "../entities";
import { getBaseUrl } from "../../main";

@Injectable()
export class LogService {

  private baseUrl: string = null;

  constructor(private http: HttpClient) {
    this.baseUrl = getBaseUrl();
  }

  public static write(message: string) {
  }

  public trace(module: string, message: string, detail: string) {
    this.createLog(new LogEntity({ id: '', level: 'Trace', created: (new Date()), module: module, message: message, detail: detail }));
  }

  public debug(module: string, message: string, detail: string) {
    this.createLog(new LogEntity({ id: '', level: 'Debug', created: (new Date()), module: module, message: message, detail: detail }));
  }

  public info(module: string, message: string, detail: string) {
    this.createLog(new LogEntity({ id: '', level: 'Info', created: (new Date()), module: module, message: message, detail: detail }));
  }

  public warning(module: string, message: string, detail: string) {
    this.createLog(new LogEntity({ id: '', level: 'Warning', created: (new Date()), module: module, message: message, detail: detail }));
  }

  public error(module: string, message: string, detail: string) {
    this.createLog(new LogEntity({ id: '', level: 'Error', created: (new Date()), module: module, message: message, detail: detail }));
  }

  private createLog(log: LogEntity) {
    this.http.post(this.baseUrl, log).subscribe(log => {
    });
  }
}
