import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './_guards/auth.guard';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
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
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MatCardModule, MatFormFieldModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { AddGModalComponent } from './addGModal/addgmodal.component';
import { SettingsComponent } from './settings/settings.component';
import { GoalListService } from './_services/goal-list.service';
import { ViewgoalsComponent } from './viewgoals/viewgoals.component';
import { MatMenuModule } from '@angular/material/menu';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UpdateGModalComponent } from './updateGModal/updategmodal.component';
import { MatSidenavModule, MatListModule, MatIconModule, MatInputModule } from '@angular/material';
import { SettingslistComponent } from './settingslist/settingslist.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { HighlightDirective } from './highlight.directive';







@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
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
    HighlightDirective 

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
    MatPaginatorModule,
    MatButtonToggleModule,
    MatDialogModule, 
    MatCardModule
  ],

  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    GoalListService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],

  entryComponents: [AddGModalComponent, UpdateGModalComponent,SettingslistComponent],

 

})
export class AppModule { }



