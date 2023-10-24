import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/auth/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  title:String = "Northwest Missouri State University";
  appName:String = "Event Tracking System";
  errorNotification = "please enter valid email and password";
  loginForm: FormGroup | any;
  loginUserData={};
  submitted = false;
  show: boolean = false;
  // loginUserData = {email:"test@nwmissouri.edu", password:"test@123$"};
  constructor(private formBuilder: FormBuilder,private route: Router, private auth: AuthServiceService) { }
 
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['sai@nwmissouri.edu', [Validators.required,Validators.pattern('^[A-Za-z._%+-]+@nwmissouri.edu')]],
      password: ['sai@123$', [Validators.required]]
  });
  // localStorage.setItem('user', JSON.stringify(this.loginUserData));
  
  
}
get f() { return this.loginForm.controls; }
// onSubmit() {
//   this.submitted = true;
//   if( !this.loginForm.invalid) {
//     this.route.navigate(['/home']);
//     // console.log(`login`);
//   }
  
// }

onSubmit() {
  // console.log(this.loginUserData);
  localStorage.setItem('currentUser',JSON.stringify(this.loginUserData));
  this.submitted = true; 
  if(this.f.email.value == "sai@nwmissouri.edu" && this.f.password.value == "sai@123$") {
  this.auth.login(this.f.email.value, this.f.password.value).subscribe(
  (res) => {
    if(res)
    this.route.navigate(['/home'])
    console.log(`test ${this.loginUserData} `);
    console.log(this.f.email.value,"login form controls");    
  })}
  else{
    this.show = true;
    setTimeout(() =>{
      this.show = !this.show;
    },3000);
    // alert(this.f.email.value + " or " + this.f.password.value + " are invalid" )
  }
}
closeNotification(){
  this.show = !this.show
  setTimeout(() =>{
    this.show = !this.show;
  },1000);
}
}

// {
//   next(response){
//     // this.route.navigate(['/home'])
//     console.log('login response',response)
//   }
// }