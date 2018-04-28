import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { LayoutComponent } from './container/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
