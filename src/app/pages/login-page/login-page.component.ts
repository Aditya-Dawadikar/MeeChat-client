import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticatedUsers} from 'src/shared/Mock data/authUsers';
import {users} from 'src/shared/Mock data/users';
import {User} from 'src/shared/user';
import {LoginSignupService} from 'src/app/services/login-signup.service';
import {Auth} from 'src/shared/Auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  constructor(
    private router:Router,
    private loginSignUpServiceObject:LoginSignupService
    ) { }

  @ViewChild('lf') lform:any;
  @ViewChild('sf') sform:any;

  loginObject:any={
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
  foundUser:User;

  ngOnInit(): void {
    this.loginHide=false;
    this.signupHide=true;
  }

  onLogin(){
    if(this.lform.valid){
      let isAuthenticated:boolean=false;
      isAuthenticated=this.validateUser(this.loginObject);
      if(isAuthenticated===true){
        this.loginSignUpServiceObject.setAuthUser(this.foundUser);
        this.visitChatPage();
      }else{
        alert("username and password doesnot match");
      }
      this.lform.reset();
    }
  }

  onSignUp(){
    if(this.sform.valid){
      this.registerNewUser();
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

  validateUser(loginObject:any):boolean{
    for(let i=0;i<AuthenticatedUsers.length;i++){
      if(loginObject.email===AuthenticatedUsers[i].userName){
        if(loginObject.password===AuthenticatedUsers[i].password){
          this.foundUser=users[AuthenticatedUsers[i].id];
          return true;
        }
      }
    }
    return false;
  }

  registerNewUser(){
    let newUser:User={
      userName:this.signupObject.email,
      id:users.length,
      avatar:"#",
      friends:[],
      blocked:[]
    }
    let newAuthUser:Auth={
      userName:this.signupObject.email,
      password:this.signupObject.password,
      id:users.length
    }
    AuthenticatedUsers.push(newAuthUser);
    users.push(newUser);
  }

}
