import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { Signup } from '../signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup:Signup=new Signup();

  constructor(private backend:BackendService,private router:Router) {
   }

  ngOnInit(): void {
  }

  validate()
  {
    this.backend.postsignup(this.signup).subscribe(
      data=>{
        console.log(data)
        if(JSON.stringify(data).includes("login"))
        {
          alert('SignUp Successful.')
          this.router.navigate(['login']);
        }
      },
    
    err=>{
      if(err.error=="alert")
       alert('Given details already exist.Try to login or give a different username or email or mobile')
    })
    console.log(this.signup.username)
  }

  loginPage()
  {
    this.router.navigate(['login']);
  }

}
