import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service';
import { Router, ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-lastoutput',
  templateUrl: './lastoutput.component.html',
  styleUrls: ['./lastoutput.component.css']
})
export class LastoutputComponent implements OnInit {

  email:any
  linkedin:any
  twitter:any
  github:any
  facebook:any
  instagram:any
  phone:any
  name:any

  constructor(private apiService:ApiService,private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params)=>{
      this.email = params['emailId']
      console.log(this.email)
    })


    this.apiService.getLinks(this.email).subscribe(
      (response)=>{
        if(response == ""){

          this.linkedin = ""
          this.twitter = ""
          this.github = ""
          this.facebook = ""
          this.instagram = ""
          this.phone = ""
          this.name = ""
        }
        else{
          console.log(response)
          console.log(response['linkedin'])
          this.linkedin = response['linkedin']
          this.twitter = response['twitter']
          this.github = response['github']
          this.facebook = response['facebook']
          this.instagram = response['instagram']
          this.phone = response['phone']
          this.name = response['name']
        }
      }

    )


  }
  value1="https://www.linkedin.com/in/revathy-velumani/";
  value2="https://www.linkedin.com/in/revathy-velumani/";
  value3="https://www.linkedin.com/in/revathy-velumani/";
  value4="https://www.linkedin.com/in/revathy-velumani/";
  value5="https://www.linkedin.com/in/revathy-velumani/";


}
