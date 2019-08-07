 import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 answer1:any;
 CA1: any;
 tempCA:any;
 

  constructor( private storage:Storage, private router: Router) {
    
  }

  ngOnInit(){
    this.storage.set('CA1', 'C');
    this.storage.set('CA2', 'C');
    this.storage.set('CA3', 'D');
    this.storage.set('CA4', 'C');
    this.storage.set('CA5', 'E');
    this.storage.set('CA6', 'C');
    this.storage.set('CA7', 'C');
    this.storage.set('CA8', 'A');
    this.storage.set('CA9', 'D');
    this.storage.set('CA10', 'C');
    this.storage.set('CA11', 'A');
    this.storage.set('CA12', 'C');
    this.storage.set('CA13', 'B');
    this.storage.set('CA14', 'D');
    this.storage.set('CA15', 'B');
    this.storage.set('correctAns', 0);
    }

   
   
    select(option, answer){

      this.storage.set('answer1',answer);
      
        this.answer1 = answer;
        this.storage.get('CA1').then((value) => {
        this.CA1 = value ;
        });
      
      }
        goNext(){
          if(this.answer1==this.CA1){
            this.storage.get('correctAns').then((value) =>{
              var CA = value ;
              this.tempCA =(CA+1);
              this.storage.set('correctAns', this.tempCA);
              this.storage.set('remark1', 'correct');
            })
        
          }else{
            this.storage.set('remark1', 'incorrect');
          }
          
          console.log(this.answer1, this.CA1);
 this.router.navigate(['/question2'], { queryParams:{ answer1:this.answer1, CA1:this.CA1} });
       
}

}