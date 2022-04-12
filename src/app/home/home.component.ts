import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = environment.name
  photo = environment.photo
  id = environment.id
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  exit(){
    this.router.navigate(['/login'])
    environment.photo = ''
    environment.name = ''
    environment.token = ''
    environment.id = 0
  }

}
