import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { LayoutComponent } from './container/layout/layout.component';
import { LayoutModule } from './container/layout/layout.module';

@NgModule({
  declarations: [AppComponent, TopbarComponent, FooterComponent],
  imports: [BrowserModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
