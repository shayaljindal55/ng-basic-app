import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTabsModule } from '@angular/material/tabs';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from './components/pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TabContentComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [HeaderComponent, PopUpComponent],
  exports: [MatToolbarModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
