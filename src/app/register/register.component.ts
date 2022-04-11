import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserLogin } from '../model/userLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User()
  userPassword: string

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  } 

  confirmPassword(event: any) {
    this.userPassword = event.target.value
  }

  register(){

    if(this.user.password != this.userPassword){
      alert('Wrong password')
    } else {
      this.auth.register(this.user).subscribe((resp: User) => {
        this.user = resp;
        this.router.navigate(['/login'])
        alert('User registered successfully')
      })
    }
  }

}
