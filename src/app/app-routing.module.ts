import { InputlinksComponent } from './inputLinks/inputlinks/inputlinks.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './authentication/login/login.component';
import { OutputlinkComponent } from './outputpage/outputlink/outputlink.component';
import { LastoutputComponent } from './outputpage/lastoutput/lastoutput.component';
import { FirstpageComponent } from './header/firstpage/firstpage.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'input', component:InputlinksComponent},
  {path:'output', component: OutputlinkComponent},
  {path:'showLinks/:emailId',component: LastoutputComponent},
  {path:'', component:FirstpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
