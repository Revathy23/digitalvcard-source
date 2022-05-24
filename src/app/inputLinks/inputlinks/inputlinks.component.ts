import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-inputlinks',
  templateUrl: './inputlinks.component.html',
  styleUrls: ['./inputlinks.component.css']
})

export class InputlinksComponent implements OnInit {

  formdata:FormGroup

  constructor(public formBuilder: FormBuilder, private apiService:ApiService,private snackBar:MatSnackBar,private router:Router) { }

  ngOnInit() {
      this.formdata = this.formBuilder.group({
          linkedin: new FormControl('',[Validators.required]),
          twitter: new FormControl(""),
          git: new FormControl(""),
          facebook: new FormControl(""),
          instagram: new FormControl("")
      });
   }
   onClickSubmit(){
      if(this.performInputValidation())
    {

     let links = {
       "linkedin": this.formdata.value.linkedin,
       "twitter": this.formdata.value.twitter,
       "git": this.formdata.value.git,
       "facebook": this.formdata.value.facebook,
       "instagram": this.formdata.value.instagram

      }

     console.log(links);

     localStorage.setItem("links",JSON.stringify(links));

     console.log(localStorage.getItem('userDetails'));

     this.snackBar.open('Details stored Successfully. Login/Signup to get links', 'Ok', {
      duration: 3000
    });

    this.router.navigateByUrl('signup')
    }
    }


    checkError = (controlName: string, errorName: string) => {
      return this.formdata.controls[controlName].hasError(errorName);
    }

      performInputValidation(){
    return this.formdata.valid
  }
}
