import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RequestsComponent } from './requests/requests.component';
import { RequestListComponent } from './requests/request-list/request-list.component';
import { RequestDetailComponent } from './requests/request-detail/request-detail.component';
import { RequestItemComponent } from './requests/request-list/request-item/request-item.component';
import { ToolsMaterialsComponent } from './tools-materials/tools-materials.component';
import { MaterialsEditComponent } from './tools-materials/materials-edit/materials-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RequestsComponent,
    RequestListComponent,
    RequestDetailComponent,
    RequestItemComponent,
    ToolsMaterialsComponent,
    MaterialsEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
