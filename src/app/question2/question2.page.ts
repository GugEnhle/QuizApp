import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.page.html',
  styleUrls: ['./question2.page.scss'],
})
export class Question2Page  {
  answer2: any;
  CA2: any;
  tempCA: any;
  answer1: any;
  CA1: any;
  

  constructor(  private storage:Storage, private router: Router,
    private route:ActivatedRoute) {

   }
  
  ngOnInit(){
  this.route.queryParams
   .subscribe(params =>
{
    console.log(params);
     this.answer1 = params.answer1 ,
     this.answer2 = params.answer2 , 
        this.CA2 = params.CA2,
      this.CA1 = params.CA1;
     console.log(this.answer1, this.answer2,this.CA2,this.CA1);
});
   }
     
   select(option, answer){

    this.storage.set('answer2',answer);
    
      this.answer2 = answer;
      this.storage.get('CA2').then((value) => {
      this.CA2 = value ;
      });
    }

  goNext(){
          if(this.answer2==this.CA2){
            this.storage.get('correctAns').then((value) =>{
              var CA = value ;
              this.tempCA =(CA+1);
              this.storage.set('correctAns', this.tempCA);
              this.storage.set('remark2', 'correct');
            })
        
          }else{
            this.storage.set('remark2', 'incorrect');
          }

  console.log(this.answer2,this.CA2,this.answer1, this.CA1);
  this.router.navigate(['/question3'], { queryParams:{ answer1:this.answer1, CA1:this.CA1,answer2:this.answer2,CA2:this.CA2 } });
}

}
  

