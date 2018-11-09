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
import { ResourcesComponent } from './resources/resources.component';
import {MatButtonModule, MatCheckboxModule,MatDialogModule,MatCardModule,MatFormFieldModule,MatSidenavModule, MatListModule, MatIconModule,MatInputModule, MatToolbarModule,MatTableModule,MatPaginatorModule } from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { AddGModalComponent } from './addGModal/addgmodal.component';
import { SettingsComponent } from './settings/settings.component';
import { GoalListService } from './_services/goal-list.service';
import { ViewgoalsComponent } from './viewgoals/viewgoals.component';
import { MatMenuModule } from '@angular/material/menu';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UpdateGModalComponent } from './updateGModal/updategmodal.component';
import { SettingslistComponent } from './settingslist/settingslist.component';





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
    SettingslistComponent,
    AddGModalComponent,
    ResourcesComponent,
    MainNavComponent,
    UpdateGModalComponent,
    
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
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule
    
  ],

  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    GoalListService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    // { provide:  MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
  ],
  bootstrap: [AppComponent],

  entryComponents: [AddGModalComponent, UpdateGModalComponent,SettingslistComponent],

 

})
export class AppModule { }



