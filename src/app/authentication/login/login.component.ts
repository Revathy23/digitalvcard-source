import { ApiService } from './../../api.service';
import { Component,OnInit, OnChanges, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators,NgForm, NgModel } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

/* validate form */

loginForm:FormGroup

constructor(public formBuilder: FormBuilder, private apiService:ApiService, private snackBar: MatSnackBar,private router: Router){ }

ngOnInit(){
    this.loginForm = this.formBuilder.group({
      userName:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('', [Validators.required])

  });
}

onSubmit() {

  let userDetails = {
    "userName":this.loginForm.value.userName,
    "password":this.loginForm.value.password

  }
  console.log(userDetails)

  localStorage.setItem("userDetails",JSON.stringify(userDetails))

  this.apiService.checkDetails(userDetails.userName,userDetails.password).subscribe(
            (response)=>{
              if(response.status == "success"){
                this.snackBar.open('Login Successful.', 'Ok', {
                  duration: 3000
                });
                localStorage.setItem("userName",userDetails.userName)

                  let links = JSON.parse(String(localStorage.getItem('links')))
                  this.apiService.storeLinks(userDetails.userName,links.linkedin,links.twitter,links.git,links.facebook,links.instagram).subscribe((response)=>{
                                    if(response.status == "success"){
                   this.router.navigateByUrl('output')

                  }
                })

              }
              else if(response.status == "password wrong"){
                this.snackBar.open('Password is wrong. Please login with the correct password.', 'Ok', {
                  duration: 3000
                });
                this.router.navigateByUrl('login')
              }
              else{
                this.snackBar.open('User doesn\'t exist. Please signup.', 'Ok', {
                  duration: 3000
                });
                this.router.navigateByUrl('signup')
              }
            }
  )

}



checkError = (controlName: string, errorName: string) => {
  return this.loginForm.controls[controlName].hasError(errorName);
}

 }
