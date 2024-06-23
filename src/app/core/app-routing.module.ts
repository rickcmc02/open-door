import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from "src/app/component/exam/exam.component";
import { MainComponent } from 'src/app/component/main/main.component';

const routes: Routes = [
  { path: "", component: ExamComponent },
  { path: "main", component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
