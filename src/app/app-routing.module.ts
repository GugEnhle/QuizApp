import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'question2', loadChildren: './question2/question2.module#Question2PageModule' },
  { path: 'question3', loadChildren: './question3/question3.module#Question3PageModule' },
  { path: 'question4', loadChildren: './question4/question4.module#Question4PageModule' },
  { path: 'question5', loadChildren: './question5/question5.module#Question5PageModule' },
  { path: 'results', loadChildren: './results/results.module#ResultsPageModule' },
  { path: 'question6', loadChildren: './question6/question6.module#Question6PageModule' },
  { path: 'question7', loadChildren: './question7/question7.module#Question7PageModule' },
  { path: 'question8', loadChildren: './question8/question8.module#Question8PageModule' },
  { path: 'question9', loadChildren: './question9/question9.module#Question9PageModule' },
  { path: 'question10', loadChildren: './question10/question10.module#Question10PageModule' },
  { path: 'question11', loadChildren: './question11/question11.module#Question11PageModule' },
  { path: 'question12', loadChildren: './question12/question12.module#Question12PageModule' },
  { path: 'question13', loadChildren: './question13/question13.module#Question13PageModule' },
  { path: 'question14', loadChildren: './question14/question14.module#Question14PageModule' },
  { path: 'question15', loadChildren: './question15/question15.module#Question15PageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
