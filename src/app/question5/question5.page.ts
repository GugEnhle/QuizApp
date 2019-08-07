import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Question6Page } from '../question6/question6.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.page.html',
  styleUrls: ['./question5.page.scss'],
})
export class Question5Page implements OnInit {
  tempCA: any;
  answer1: any;
  answer2: any;
  answer3: any;
  answer4: any;
  answer5: any;
  CA3: any;
  CA2: any;
  CA1: any;
  CA4: any;
  CA5: any;
  constructor( private storage:Storage, private router:Router,private route:ActivatedRoute ) {

  }
 
  ngOnInit(){
this.route.queryParams
     .subscribe(params =>
  {
      console.log(params);
       this.answer1 = params.answer1 ,
       this.answer2 = params.answer2 ,
       this.answer3 = params.answer3 ,
       this.answer4 = params.answer4 ,
       this.answer5 = params.answer5 ,
       this.CA1 = params.CA1,
       this.CA2 = params.CA2,
       this.CA3 = params.CA3,
       this.CA4 = params.CA4;
       console.log(this.answer1, this.answer2,this.answer3,this.answer4,this.answer5,this.CA1,this.CA2,this.CA3,this.CA4,this.CA5);
  });
  }
 select(option, answer){

 this.storage.set('answer5',answer);
 this.answer5 = answer;
  this.storage.get('CA5').then((value) => {
  this.CA5 = value ;
      });
 }
 goNext(){
 if(this.answer5==this.CA5){
   this.storage.get('correctAns').then((value) =>{
     var CA = value ;
     this.tempCA =(CA+1);
     this.storage.set('correctAns', this.tempCA);
     this.storage.set('remark5', 'correct');
   })

 }else{
   this.storage.set('remark5', 'incorrect');
 }
 
 console.log(this.answer1,this.answer2,this.answer2,this.answer3,this.answer4,this.answer5,this.CA1,this.CA2,this.CA3,this.CA4,this.CA5);
 this.router.navigate(['/question6'], { queryParams:{ answer1:this.answer1,answer2:this.answer2,answer3:this.answer3, answer4:this.answer4,
  answer5:this.answer5, CA1:this.CA1,CA2:this.CA2,CA3:this.CA3,CA4:this.CA4,CA5:this.CA5} });
}
 

 }

