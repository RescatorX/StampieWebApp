import { HttpHeaders } from '@angular/common/http';

export class NetUtils {

  public static getRequestOptions() {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Accept': 'application/json;charset=UTF-8'
    });
    var options = {
      headers: headers
    };
    return options;
  }
}
