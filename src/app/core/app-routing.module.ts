import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from "src/app/component/sign-in/sign-in.component";
import { MainComponent } from '../component/main/main.component';

const routes: Routes = [
  { path: "sign-in", component: SignInComponent },
  { path: "main", component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
