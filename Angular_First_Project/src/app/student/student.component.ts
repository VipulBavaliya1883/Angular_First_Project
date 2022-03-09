import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students = [{ name: "Vipul" }, { name: "Yash" }, { name: "Raj" }, { name: "Mihir" }]

  constructor() { }

  ngOnInit(): void {
  }

}
