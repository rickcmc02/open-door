import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { Translation } from "src/app/model/base.model"
import i18n from "src/assets/data/i18n.json";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isKor: boolean;
  translation: Translation = i18n;

  constructor(private titleService: Title, private cookieService: CookieService, private router: Router) {
    this.titleService.setTitle("munheeexam");
    const cookieLang = this.cookieService.get("lang");
    this.isKor = cookieLang === "ko";
  };

  ngOnInit(): void {
    const examResult = this.cookieService.get("exam")
    if (examResult !== "passed") {
      alert("Exam first!")
      this.router.navigate(["/sign-in"])
    }
  };

  t = (label: string): string => {
    let translatedLabel = label;
    if (this.isKor && this.translation[label]) translatedLabel = this.translation[label];
    return translatedLabel;
  };

  nextPage() {
    console.log(screen.height);
    window.scrollBy(0, screen.height);
  };

  firstPage() {
    console.log("to first page");
    window.scrollTo(0, 0);
  };
}
