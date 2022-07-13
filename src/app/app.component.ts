import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MyProject';
   loginForm:FormGroup


  constructor(private fb:FormBuilder){
    this.loginForm= this.fb.group({
      fullName:[''],
      email:['',],
      skills : this.fb.group({
      skillName:[''],
      experienceInYears:[''],
      Proficiency:['']
    
        })
       })
  }
  

ngOnInit() {

   
}
onsubmit():any{
 console.log(this.loginForm.get("fullname"))
  console.log(this.loginForm.value)
}
  

}
