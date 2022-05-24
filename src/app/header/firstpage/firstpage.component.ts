import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {

  constructor(private router: Router){
  }

  ngOnInit(): void {
  }

  onClickSubmit(){
  this.router.navigateByUrl('input')
  }
}
