import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

import { CookieService } from "ngx-cookie-service";

import { ExamAnswer, ExamContent, ExamData } from "src/app/model/exam.model";
import { Translation } from "src/app/model/base.model"
import exam from "src/assets/data/exam.json";
import examAnswer from "src/assets/data/exam-answer.json";
import i18n from "src/assets/data/i18n.json";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent {
  isKor: boolean;
  translation: Translation = i18n;
  alertMsg = "";
  stage = 1;
  examTopics = Object.keys(exam);
  examData: ExamData = exam;
  examAns: ExamAnswer = examAnswer;
  currExam: ExamContent;
  examForm: FormGroup = new FormGroup({});

  constructor(private titleService: Title, private cookieService: CookieService, private router: Router) {
    this.titleService.setTitle("munheeexam");
    const cookieLang = this.cookieService.get("lang");
    this.isKor = cookieLang === "ko";
    for (const topic of this.examTopics) {
      this.examForm.addControl(topic, new FormControl<string>("", Validators.required));
    }
    this.currExam = this.examData[this.examTopics[this.stage - 1]];
  }

  t = (label: string): string => {
    let translatedLabel = label;
    if (this.isKor && this.translation[label]) translatedLabel = this.translation[label];
    return translatedLabel;
  }

  changeLanguage(): void {
    this.cookieService.set("lang", this.isKor ? "en" : "ko");
    this.isKor = !this.isKor
  }

  nextStage(currStageId: string): void {
    if (this.examForm.value[currStageId] === this.examAns[currStageId]) {
      if (this.stage === this.examTopics.length) {
        // 마지막 문제를 정상적으로 제출한 경우
        if (this.examForm.status === "VALID") {
          // 전체 FormGroup 유효성 검증
          console.log("all passed");
          this.cookieService.set("exam", "passed")
          this.router.navigate(["/main"]);
        } else {
          alert(this.t("Error on submit. Please try again."));
        }
      } else {
        this.stage += 1;
        this.currExam = this.examData[this.examTopics[this.stage - 1]];
      }
      this.alertMsg = "";
    } else {
      this.alertMsg = this.currExam.options.filter(
        option => option.value === this.examForm.value[currStageId]
      )[0]?.msg;
    }
  }
}
