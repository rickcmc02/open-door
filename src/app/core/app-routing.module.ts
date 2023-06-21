import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from "src/app/component/sign-in/sign-in.component";
import { MainComponent } from '../component/main/main.component';

const routes: Routes = [
  { path: "", component: SignInComponent },
  { path: "main", component: MainComponent }
];

// 시험을 exam으로 두고 시험 동의를 인덱스로 두는 안 고려

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
