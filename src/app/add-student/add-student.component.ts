import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(
    // private router: Router,
    private location: Location,
    private studentsDataSvc: StudentDataService

  ) { }

  ngOnInit(): void {
  }

  studentName = "";

  addStudent() {
    //this.router.navigateByUrl("/");
    this.studentsDataSvc.addStudent({
      name: this.studentName,
      degreeProgram: "Unknown"
    });

    this.location.back(); // This acts as pressing the backward button in the browser
  }
}
