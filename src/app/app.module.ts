import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { fakeBackendProvider } from './_helpers/fake-backend';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AlertComponent } from './_directives/alert.component';
import { AuthGuard } from './_guards/auth.guard';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { ResourcesComponent } from './resources/resources.component';
import {MatButtonModule, MatCheckboxModule,MatDialogModule,MatCardModule,MatFormFieldModule,MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AddGModalComponent } from './addGModal/addgmodal.component';
import { SettingsComponent } from './settings/settings.component';
import { LogoutComponent } from './logout/logout.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalListService } from './_services/goal-list.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    AuthComponent,
    ResourcesComponent,
    NavComponent,
    FooterComponent,
    SettingsComponent,
    LogoutComponent,
    AlertComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    GoalListComponent,
    AddGModalComponent
    
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
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    GoalListService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddGModalComponent]
})
export class AppModule { }
