import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/userLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()


  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scrollTo(0,0)
  }

  enter(){
    this.auth.login(this.userLogin).subscribe({
      next: (resp: UserLogin)=> {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.name =this.userLogin.name
      environment.photo= this.userLogin.photo
      environment.id = this.userLogin.id

      console.log(environment.name)
      console.log(environment.photo)
      console.log(environment.id)

      this.router.navigate(['/home'])
    },
    error: erro =>{
      if(erro.status == 500) {
        alert('Username or password is incorrect')
      }
      }
    })

  }

}
