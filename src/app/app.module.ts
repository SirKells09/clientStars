import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './_guards/auth.guard';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ResourcesComponent } from './resources/resources.component';

import {MatButtonModule, MatCheckboxModule,MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';

import { FooterComponent } from './footer/footer.component';
import { AddGModalComponent } from './addGModal/addgmodal.component';
import { SettingsComponent } from './settings/settings.component';
import { GoalListComponent } from './goal-list/goal-list.component';

import { GoalListService } from './_services/goal-list.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ViewgoalsComponent } from './viewgoals/viewgoals.component';
import { MatMenuModule } from '@angular/material/menu';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule, MatListModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResourcesComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    SettingsComponent,
    GoalListComponent,

    AddGModalComponent,
    

    ViewgoalsComponent,
    MainNavComponent

  ],
imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,

    MatToolbarModule,
    NgbModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule

  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    GoalListService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddGModalComponent]
})
export class AppModule { }



