import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName: string = "";
  response: any;

  constructor(private http: HttpClient) {
  }
  search() {
    this.http.get(`https://api.github.com/users/${this.userName}/followers`)
      .subscribe((response) => {
        this.response = response;
      })
  }
}