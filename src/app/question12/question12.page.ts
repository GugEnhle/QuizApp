import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Question13Page } from '../question13/question13.page';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-question12',
  templateUrl: './question12.page.html',
  styleUrls: ['./question12.page.scss'],
})
export class Question12Page implements OnInit {
  tempCA: any;
  answer1: any;
  answer2: any;
  answer3: any;
  answer4: any;
  answer5: any;
  answer6: any;
  answer7: any;
  answer8: any;
  answer9: any;
  answer10: any;
  answer11: any;
  answer12: any;
  CA3: any;
  CA2: any;
  CA1: any;
  CA4: any;
  CA5: any;
  CA6: any;
  CA7: any;
  CA8: any;
  CA9: any; 
  CA10: any; 
  CA11: any;
  CA12: any;
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
       this.answer8 = params.answer8 ,
       this.answer9 = params.answer9 ,
       this.answer10 = params.answer10 ,
       this.answer11 = params.answer11 ,
       this.answer12 = params.answer12 ,

       this.CA1 = params.CA1,
       this.CA2 = params.CA2,
       this.CA3 = params.CA3,
       this.CA4 = params.CA4,
       this.CA5 = params.CA5;
       this.CA6 = params.CA6;
       this.CA7 = params.CA7;
       this.CA8 = params.CA8; 
       this.CA9 = params.CA9;
       this.CA10 = params.CA10;
       this.CA11 = params.CA11;

       console.log(this.answer1, this.answer2,this.answer3,this.answer4,this.answer5,this.answer6,this.answer7,this.answer8,this.answer9,this.answer10,this.answer11,this.answer12,
        this.CA1,this.CA2,this.CA3,this.CA4,this.CA5,this.CA6,this.CA7,this.CA8,this.CA9,this.CA10,this.CA11,this.CA12);
  });
  }
 select(option, answer){

 this.storage.set('answer12',answer);
 this.answer12 = answer;
  this.storage.get('CA12').then((value) => {
  this.CA12 = value ;
      });
 }
 goNext(){
 if(this.answer12==this.CA12){
   this.storage.get('correctAns').then((value) =>{
     var CA = value ;
     this.tempCA =(CA+1);
     this.storage.set('correctAns', this.tempCA);
     this.storage.set('remark12', 'correct');
   })

 }else{
   this.storage.set('remark12', 'incorrect');
 }
 
 console.log(this.answer1,this.answer2,this.answer2,this.answer3,this.answer4,this.answer5,this.answer6,this.answer7,this.answer8,this.answer9,this.answer10,this.answer11,this.answer12,
  this.CA1,this.CA2,this.CA3,this.CA4,this.CA5,this.CA6,this.CA7,this.CA8,this.CA9,this.CA10,this.CA11,this.CA12);
 this.router.navigate(['/question13'], { queryParams:{ answer1:this.answer1,answer2:this.answer2,answer3:this.answer3, answer4:this.answer4,
  answer5:this.answer5,answer6:this.answer6,answer7:this.answer7,answer8:this.answer8,answer9:this.answer9,answer10:this.answer10,answer11:this.answer11,answer12:this.answer12,
   CA1:this.CA1,CA2:this.CA2,CA3:this.CA3,CA4:this.CA4,CA5:this.CA5,CA6:this.CA6,CA7:this.CA7,CA8:this.CA8,CA9:this.CA9,CA10:this.CA10,CA11:this.CA11,CA12:this.CA12} });
}
 

 }

