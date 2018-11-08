import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './_directives/alert.component';
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

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ResourcesComponent } from './resources/resources.component';
import {MatButtonModule, MatCheckboxModule,MatDialogModule,MatCardModule,MatFormFieldModule,MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';

import { FooterComponent } from './footer/footer.component';
import { AddGModalComponent } from './addGModal/addgmodal.component';
import { SettingsComponent } from './settings/settings.component';
import { GoalListService } from './_services/goal-list.service';
import { ViewgoalsComponent } from './viewgoals/viewgoals.component';
import { MatMenuModule } from '@angular/material/menu';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
<<<<<<< HEAD
import { MatSidenavModule, MatListModule, MatDialogModule, MatCardModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { SettingslistComponent } from './settings/settingslist/settingslist.component';
import { AddGModalComponent } from './add-gmodal/add-gmodal.component';
import { GoalListService } from './_services/goal-list.service';
=======
import { MatSidenavModule, MatListModule, MatIconModule,MatInputModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ResourcesComponent } from './resources/resources.component';
>>>>>>> 309bcb6d9e6fd04c873255919c5a1ef917a8f3ad



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    AlertComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    SettingsComponent,
    AddGModalComponent,
    ViewgoalsComponent,
<<<<<<< HEAD
    MainNavComponent,
    SettingslistComponent,
    AddGModalComponent,
=======

    MainNavComponent,
    ResourcesComponent,

    MainNavComponent
>>>>>>> 309bcb6d9e6fd04c873255919c5a1ef917a8f3ad

  ],
imports:[
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
<<<<<<< HEAD
    MatListModule,
    MatInputModule,
    MatDialogModule, 
    MatCardModule,
     
=======
    MatInputModule,
    MatListModule

>>>>>>> 309bcb6d9e6fd04c873255919c5a1ef917a8f3ad
  ],

  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    GoalListService,
    UserService,
<<<<<<< HEAD
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    { provide:  MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddGModalComponent,
    SettingslistComponent
  ]

=======
    GoalListService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddGModalComponent]
>>>>>>> 309bcb6d9e6fd04c873255919c5a1ef917a8f3ad
})
export class AppModule { }



