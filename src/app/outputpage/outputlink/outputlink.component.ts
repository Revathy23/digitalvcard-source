import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-outputlink',
  templateUrl: './outputlink.component.html',
  styleUrls: ['./outputlink.component.css']
})
export class OutputlinkComponent implements OnInit {

  constructor(private activatedRouter:ActivatedRoute,private router:Router) { }

  userDetails:any;
  linkValue:any;

  ngOnInit(): void {
    // this.userDetails = JSON.parse(localStorage.getItem('userDetails')) || {} ;
    // this.activatedRouter.params.subscribe((params)=>{
    //   this.emailId = params.emailId
    // })
    this.linkValue = "localhost:4200/showLinks/"+String(localStorage.getItem('userName'))

  }
  // localStorage.getItem("userName")
}
