import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { TechnewsComponent } from './technews/technews.component';

const routes: Routes = [
  {path:'',component:TopHeadingComponent}, //home
  {path:'tech',component:TechnewsComponent}, //Technology news
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
