import { Component, OnInit } from '@angular/core';
import { MyService } from './my-service';

@Component({
  selector: 'my-apps',
  template: '',
})
export class MyComponent implements OnInit {
  constructor(private myService: MyService) {
    //console.log('my components', this.myService.name);
  }
  ngOnInit() {
    console.log('my component', this.myService.name);
  }
}
