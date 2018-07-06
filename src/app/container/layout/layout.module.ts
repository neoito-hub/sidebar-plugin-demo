import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';
import { TopbarComponent } from '../../component/topbar/topbar.component';
import { ContentComponent } from '../../component/content/content.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SidebarComponent,
    TopbarComponent,
    ContentComponent,
    LayoutComponent
  ],
  exports: []
})
export class LayoutModule {}
