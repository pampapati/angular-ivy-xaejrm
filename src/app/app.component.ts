import { Component, OnInit, VERSION } from '@angular/core';
import { MyService } from './my-service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  text = 'Dummy text';
  user = 'xyddz';
  data = [
    { name: 'Anuj', age: 25 },
    { name: 'Akshay', age: 28 },
    { name: 'Sanjay', age: 35 },
  ];
  columns = [];
  constructor(private myService: MyService) {
    console.log('Before', this.myService.name);
    this.myService.name = 'text-tes';
    console.log('After res ', this.myService.name);
  }
  ngOnInit() {
    //this.myService.name = 'text-tes';
    for (let a in this.data[0]) {
      console.log(a);
      this.columns.push(a);
    }
  }
}
