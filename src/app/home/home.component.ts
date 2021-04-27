import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // router component => dependency injection adding private router: Router
  // It allows to below have access to this.router....
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addStudent() {
    this.router.navigateByUrl("/add-student");
  }

}
