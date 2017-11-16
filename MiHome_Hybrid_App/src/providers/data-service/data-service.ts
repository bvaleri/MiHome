import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserServiceProvider } from '../user-service/user-service';

@Injectable()
export class DataProvider {

  constructor(public http: Http,public userServiceProvider:UserServiceProvider) {

  }

  chartdata(start,end) {
    var payload = {
	     "nodeID":"",
       "start": "2017-10-14T02:12:16.546Z",
       "end":"2017-10-14T12:14:26.417Z",
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vZ2lsc2thIiwiaWF0IjoxNTA4MTE4OTY5LCJleHAiOjE1MTA3NDY5Njl9.k9a6Zlub26__LWE5yGYaZl-z0Ty9Qs5airY4UsWqE3c"
    };
    let body = JSON.stringify(payload);
    let head = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post("http://localhost:8888/api/data/find", body, { headers : head }).map(res =>  res.json());
  }

  devices(id,token) {
    let body = JSON.stringify({'userID':id,'token':token});
    console.log(body);
    let head = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post("http://localhost:8888/api/hardware/devices", body, { headers : head }).map(res =>  res.json());
  }


}