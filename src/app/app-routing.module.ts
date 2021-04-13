import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['']);
    };
  }
}
