import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputPageComponent } from './input-page/input-page.component';
import { ResultPageComponent } from './result-page/result-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/input', pathMatch: 'full' },
  { path: 'input', component: InputPageComponent },
  { path: 'result', component: ResultPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
