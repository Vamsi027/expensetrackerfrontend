import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { Signup } from '../signup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signup:Signup=new Signup();
  constructor(private backend:BackendService,private router:Router) { }

  ngOnInit(): void {
  }

  validate()
  {
    this.backend.postLogin(this.signup).subscribe(
      data=>{
        console.log(data)
        if(JSON.stringify(data).includes("loggedin"))
        {
          this.router.navigate(['login']);
        }
      },
    
    err=>{
      if(err.error=="alert")
       alert("Username and Password doesn't match")
    })
  }

  signupPage()
  {
    this.router.navigate(['signup']);
  }

}
