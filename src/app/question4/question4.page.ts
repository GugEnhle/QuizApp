import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Question5Page } from '../question5/question5.page';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-question4',
  templateUrl: './question4.page.html',
  styleUrls: ['./question4.page.scss'],
})
export class Question4Page {
  
  answer4: any;
  CA4: any;
  tempCA: any;
  answer2: any;
  answer1: any;
  CA2: any;
  CA1: any;
  CA3: any;
  answer3: any;


  constructor( private storage:Storage,private router:Router,private route:ActivatedRoute ) {

  }
 
  ngOnInit(){
    this.route.queryParams
   .subscribe(params =>
{
    console.log(params);
     this.answer4 = params.answer4 ,
     this.answer2 = params.answer2 ,
     this.answer1 = params.answer1 ,
     this.answer3 = params.answer3 ,
     this.CA3 =params.CA3,
     this.CA2 = params.CA2,
      this.CA1 = params.CA1;
     console.log(this.answer4, this.answer2,this.answer1,this.answer3,this.CA3,this.CA2,this.CA1);
});
   }
    
 select(option, answer){

 this.storage.set('answer4',answer);
 this.answer4 = answer;
 this.storage.get('CA4').then((value) => {
 this.CA4 = value ;
      });
 }

 goNext(){
 if(this.answer4==this.CA4){
   this.storage.get('correctAns').then((value) =>{
     var CA = value ;
     this.tempCA =(CA+1);
     this.storage.set('correctAns', this.tempCA);
     this.storage.set('remark4', 'correct');
   })

 }else{
   this.storage.set('remark4', 'incorrect');
 }
 console.log(this.answer4, this.answer2,this.answer1,this.answer3,this.CA3,this.CA2,this.CA1);
 this.router.navigate(['/question5'], { queryParams:{ answer4:this.answer4, CA4:this.CA4,answer1:this.answer1,answer3:this.answer3,answer2:this.answer2,
  CA3:this.CA3,CA2:this.CA2,CA1:this.CA1} });
}

}

  

