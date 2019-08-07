import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage  {

  answer1:any; answer2:any; answer3:any; answer4:any; answer5:any; answer6:any; answer7:any; answer8:any; answer9:any; answer10:any; answer11:any; answer12:any; answer13:any;
  answer14:any; answer15:any;
  remark1:number; remark2:number; remark3:number; remark4:number; remark5:number; remark6:number; remark7:number; remark8:number; remark9:any; remark10:any; remark11:any; remark12:any; remark13:any;
  remark14:any; remark15:any;
  correctAns:any;
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
  CA13: any;
  CA14: any;
  CA15: any;
 
  constructor(private route:ActivatedRoute,private storage:Storage){
    Promise.all([this.storage.get("remark1"), this.storage.get("remark2"), this.storage.get("remark3"),
    this.storage.get("remark4"),this.storage.get("remark5"),this.storage.get("remark6"),this.storage.get("remark7"),
    this.storage.get("remark8"),this.storage.get("remark9"),this.storage.get("remark10"),this.storage.get("remark11"),
    this.storage.get("remark12"),this.storage.get("remark13"),this.storage.get("remark14"),this.storage.get("remark15"),
    this.storage.get("answer1"),this.storage.get("answer2"),this.storage.get("answer3"),this.storage.get("answer4"),
    this.storage.get("answer5"),this.storage.get("answer6"),this.storage.get("answer7"),this.storage.get("answer8"),
    this.storage.get("answer9"),this.storage.get("answer10"),this.storage.get("answer11"),this.storage.get("answer12"),
    this.storage.get("answer13"),this.storage.get("answer14"),this.storage.get("answer15"),
    this.storage.get("correctAns")]).then(values => {

    let data = {
    remark1:values[0],remark2:values[1],remark3:values[2],remark4:values[3],remark5:values[4],
    remark6:values[5],remark7:values[6],remark8:values[7],remark9:values[8],remark10:values[9],
    remark11:values[10],remark12:values[11],remark13:values[12],remark14: values[13],remark15: values[14],
    answer1:values[15], answer2:values[16],answer3:values[17],answer4: values[18],answer5:values[19],answer:values[20],
    answer7:values[21],answer8:values[22],answer9:values[23],answer10:values[24],answer11:values[25],answer12:values[26],
    answer13:values[27],answer14:values[28],answer15:values[29],correctAns:values[30]

     };
     this.answer1 = data.answer1;this.answer2 = data.answer2; this.answer3 = data.answer3; this.answer4 = data.answer4;
     this.answer5 = data.answer5;this.remark6 = data.remark6;this.answer7 = data.answer7; this.answer8 = data.answer8;
     this.remark1 = data.remark1;this.remark2 = data.remark2; this.remark3 =data.remark3;this.remark4 = data.remark4; 
     this.remark5 = data.remark5;this.remark6 = data.remark6; this.remark7 = data.remark7;this.remark8 = data.remark8;
     this.remark9 = data.remark9;this.remark10 = data.remark10;this.remark11 = data.remark11;this.remark12 = data.remark12;
     this.remark13 = data.remark13;this.remark14 = data.remark14;this.remark15 = data.remark15;this.correctAns = data.correctAns;
    })
}

}

