export interface ExamData {
  [key: string]: ExamContent;
}

export interface ExamContent {
  id: string;
  label: string;
  options: { value: string; label: string; msg: string }[];
}

export interface ExamAnswer {
  [key: string]: string;
}
