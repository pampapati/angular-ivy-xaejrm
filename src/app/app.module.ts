import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyPipe } from './my-pipe';
import { OwnPipe } from './new-pipe';
import { MyComponent } from './my.component';
import { MyService } from './my-service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, OwnPipe, MyComponent],
  providers: [MyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
