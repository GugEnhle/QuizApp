import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.page.html',
  styleUrls: ['./question3.page.scss'],
})
export class Question3Page  {
  answer3: any;
  CA3: any;
  tempCA: any;
  answer1:any;
  answer2: any;
  CA2: any;
  CA1: any;

 constructor( private storage:Storage, private router:Router,private route:ActivatedRoute ) {

  }
  ngOnInit(){
    this.route.queryParams
   .subscribe(params =>
{
    console.log(params);
    this.answer2 = params.answer2 ,
    this.answer1 = params.answer1 ,
    this.CA2 = params.CA2,
     this.CA1 = params.CA1;
    console.log(this.answer2,this.CA2,this.answer1, this.CA1);
});
  }

  select(option, answer){

    this.storage.set('answer3',answer);
    
      this.answer3 = answer;
      this.storage.get('CA3').then((value) => {
      this.CA3 = value ;
      });
    
    }
 goNext(){
  if(this.answer3==this.CA3){
    this.storage.get('correctAns').then((value) =>{
      var CA = value ;
      this.tempCA =(CA+1);
      this.storage.set('correctAns', this.tempCA);
      this.storage.set('remark3', 'correct');
    })
 
  }else{
    this.storage.set('remark3', 'incorrect');
  }
  console.log(this.answer2,this.answer1, this.answer3);
  console.log(this.CA2,this.CA1,this.CA3)
  this.router.navigate(['/question4'], { queryParams:{answer3:this.answer3 , answer1:this.answer1, CA1:this.CA1,answer2:this.answer2,CA2:this.CA2,CA3:this.CA3  } });
      }
  
}



