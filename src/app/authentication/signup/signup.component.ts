import { ApiService } from './../../api.service';
import { Component,OnInit, OnChanges, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators,NgForm, NgModel } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'
  ]
})


export class SignupComponent implements OnInit {

signupForm:FormGroup

constructor(public formBuilder: FormBuilder, private apiService:ApiService, private snackBar: MatSnackBar,private router: Router){ }

ngOnInit(){
          this.signupForm = this.formBuilder.group({
      firstName:new FormControl('', [Validators.required]),
      lastName:new FormControl('', [Validators.required]),
      password:new FormControl('', [Validators.required]),
      userName:new FormControl('',[Validators.required,Validators.email]),
      confirmPassword:new FormControl('', [Validators.required])
    });
}


onSubmit() {

    let userDetails = {
      "firstName":this.signupForm.value.firstName,
      "lastName":this.signupForm.value.lastName,
      "userName":this.signupForm.value.userName,
      "confirmPassword":this.signupForm.value.confirmPassword,
      "password":this.signupForm.value.password

    }
    console.log(userDetails)
    if(userDetails.password != userDetails.confirmPassword){
       this.snackBar.open("Password and confirm password doesn't match.", 'Ok', {
                    duration: 3000
                  });
    }
    else{

    localStorage.setItem("userDetails",JSON.stringify(userDetails))
    console.log("Inside else")

    this.apiService.storeDetails(userDetails.firstName,userDetails.lastName,userDetails.userName,userDetails.password).subscribe(
              (response)=>{
                if(response.status == "success"){
                  this.snackBar.open('User Successfully Registered. ', 'Ok', {
                    duration: 3000
                  });
                  localStorage.setItem("userName",userDetails.userName)
                  console.log(localStorage.getItem('links'));
                  let links = JSON.parse(String(localStorage.getItem('links')))
                  console.log(links.linkedin)
                  this.apiService.storeLinks(userDetails.userName,links.linkedin,links.twitter,links.git,links.facebook,links.instagram).subscribe((response)=>{
                    if(response.status == "success"){
                     this.router.navigateByUrl('output')
                    }
                  })

                }
                else{
                  this.snackBar.open('User Already Exist. Please Login to continue.', 'Ok', {
                    duration: 3000
                  });
                  this.router.navigateByUrl('login')
                }
              }
    )
            }

}



  checkError = (controlName: string, errorName: string) => {
    return this.signupForm.controls[controlName].hasError(errorName);
  }


 }
