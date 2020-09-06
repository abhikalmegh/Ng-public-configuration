import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Reading configuration files';
  postsArray: any;
  configArray : any
  querySubscription: any;
  constructor(private serv: ConfigService, private _service: ServicesService) {

  }

  ngOnInit() {
    console.log('APP ', this.serv['appConfig']);
    this.configArray = this.serv['appConfig'];
    this.getData();
  }

  getData() {
    this.querySubscription = this._service.getPost().subscribe((res) => {
      this.postsArray = res;
      console.log('Tags ', this.postsArray);
    },
      (error) => {
        console.log('error ', error);
      },
      () => {
        console.log('completed');
      });
  }
}
