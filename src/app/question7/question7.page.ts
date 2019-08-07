import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Question8Page } from '../question8/question8.page';


@Component({
  selector: 'app-question7',
  templateUrl: './question7.page.html',
  styleUrls: ['./question7.page.scss'],
})
export class Question7Page implements OnInit {
  tempCA: any;
  answer1: any;
  answer2: any;
  answer3: any;
  answer4: any;
  answer5: any;
  answer6: any;
  answer7: any;
  CA3: any;
  CA2: any;
  CA1: any;
  CA4: any;
  CA5: any;
  CA6: any;
  CA7: any;
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
       this.answer6 = params.answer6 ,
       this.answer7 = params.answer7 ,

       this.CA1 = params.CA1,
       this.CA2 = params.CA2,
       this.CA3 = params.CA3,
       this.CA4 = params.CA4,
       this.CA5 = params.CA5;
       this.CA6 = params.CA6;
       console.log(this.answer1, this.answer2,this.answer3,this.answer4,this.answer5,this.answer6,this.answer7,this.CA1,this.CA2,this.CA3,this.CA4,this.CA5,this.CA6,this.CA7);
  });
  }
 select(option, answer){

 this.storage.set('answer7',answer);
 this.answer7 = answer;
  this.storage.get('CA7').then((value) => {
  this.CA7 = value ;
      });
 }
 goNext(){
 if(this.answer7==this.CA7){
   this.storage.get('correctAns').then((value) =>{
     var CA = value ;
     this.tempCA =(CA+1);
     this.storage.set('correctAns', this.tempCA);
     this.storage.set('remark7', 'correct');
   })

 }else{
   this.storage.set('remark7', 'incorrect');
 }
 
 console.log(this.answer1,this.answer2,this.answer2,this.answer3,this.answer4,this.answer5,this.answer6,this.answer7,this.CA1,this.CA2,this.CA3,this.CA4,this.CA5,this.CA6,this.CA7);
 this.router.navigate(['/question8'], { queryParams:{ answer1:this.answer1,answer2:this.answer2,answer3:this.answer3, answer4:this.answer4,
  answer5:this.answer5,answer6:this.answer6,answer7:this.answer7, CA1:this.CA1,CA2:this.CA2,CA3:this.CA3,CA4:this.CA4,CA5:this.CA5,CA6:this.CA6,CA7:this.CA7} });
}
 

 }
