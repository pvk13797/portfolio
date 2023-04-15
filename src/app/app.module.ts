import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
