import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './views/blank/blank.component';
import { NavigationComponent } from './views/navigation/navigation.component';
import { TeamComponent } from './views/team/team.component';

const routes: Routes = [{
  path: '', component: NavigationComponent,
  children: [
   { path: 'dashboard', component: BlankComponent },
   { path: 'team', component: TeamComponent },
   { path: 'projects', component: BlankComponent },
   { path: 'calendar', component: BlankComponent },
   { path: 'documents', component: BlankComponent },
   { path: 'reports', component: BlankComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
