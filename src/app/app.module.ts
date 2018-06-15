import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SimplewordsService } from './services/simplewords.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SimplewordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
