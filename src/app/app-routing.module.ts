import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { GoalsComponent } from './goals/goals.component';
import { ResourcesComponent } from './resources/resources.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "auth", component: AuthComponent },
  { path: "goals", component: GoalsComponent },
  { path: "resources", component: ResourcesComponent },
  { path: "settings", component: SettingsComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "logout", component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
