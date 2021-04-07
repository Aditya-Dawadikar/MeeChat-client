import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  constructor(private router:Router) { }

  @ViewChild('lf') lform:any;
  @ViewChild('sf') sform:any;

  model:any={
    email:"",
    password:""
  };

  signupObject:any={
    email:"",
    password:"",
    confirm:"",
  };

  loginHide:boolean;
  signupHide:boolean;

  ngOnInit(): void {
    this.loginHide=false;
    this.signupHide=true;
  }

  onSubmit(){
    if(this.lform.valid){
      console.log(this.model);
      this.lform.reset();
      this.visitChatPage();
    }
  }

  onSignUp(){
    if(this.sform.valid){
      console.log(this.signupObject);
      this.sform.reset();
      this.showLogin();
    }
  }

  showLogin(){
    this.loginHide=false;
    this.signupHide=true;
  }

  showSignUp(){
    this.loginHide=true;
    this.signupHide=false;
  }

  visitChatPage(){
    this.router.navigateByUrl('/chat');
  }

}
