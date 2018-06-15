import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SimplewordsService } from './services/simplewords.service';
import { AppComponent } from './app.component';
import { SimplewordsComponent } from './components/simplewords/simplewords.component';

@NgModule({
  declarations: [
    AppComponent,
    SimplewordsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SimplewordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
