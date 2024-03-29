import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'; 
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { SettingsComponent } from './settings/settings.component';
import { SearchSettingsComponent } from './settings/search-settings/search-settings.component';
import { FlatTreeComponent } from './settings/flat-tree/flat-tree.component';
import { UserComponent } from './settings/user/user.component';
import { WorkspaceComponent } from './settings/workspace/workspace.component';
import { TabsComponent } from './settings/tabs/tabs.component';
import { ConfigKeyComponent } from './settings/tabs/config-key/config-key.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    SearchSettingsComponent,
    FlatTreeComponent,
    UserComponent,
    WorkspaceComponent,
    TabsComponent,
    ConfigKeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatInputModule,
    MatTabsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
