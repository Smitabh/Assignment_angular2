import { Component ,Input, Output, EventEmitter,NgModule,OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { custLabourSuppService} from './services/custLabourSupp.service';
import { Info,customerInfo,submitdata} from './model/tbl_personInfo';
import { commonInformation} from '../common/commonInformation';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  name:string;
  headername:string;
  listname :string;
  isAddNew:boolean = false;
  savebtn:boolean = true;
  updatebtn:boolean = false;
  designation:boolean;
  isShowTble:boolean;
  resultMsg:string;
  cust:Info = {};
  Submitdata:submitdata = {};
  //Submitdata:commonInformation = {}
  customerlist:Info[] = [];
  constructor(private infoService:custLabourSuppService,  private router: Router) { }

  ngOnInit() {
    this.name = "ग्राह्काचे नाव ";
    this.headername = "ग्राहकाची माहिती";
    this.listname = "ग्राहकाची यादी";
    this.designation = false;
    this.isAddNew = false;
    this.isShowTble = true;
   this.getcustomerdetailsList();
  }
  HideShow()
  {
    debugger
    if(this.isShowTble)
    {
      //alert('hi');
      this.isAddNew = true;
      this.isShowTble = false;
      this.savebtn = true;
      this.updatebtn = false;
    }
    else{
      //alert('bye');
      this.isShowTble = true;
      this.isAddNew = false;
     // this.savebtn = false;
      //this.updatebtn = true;
    }
  }
//save customer data
  postDetails(flag)
  {
    debugger
    if(flag == true)
    {
      this.cust.addupdate = 1;        
     } 
    if(flag == false) {
      this.cust.addupdate = 2;
     }
    this.cust.pagenm = 'customerpage';
    this.infoService.savePersonDetls(this.cust,this.cust.addupdate,this.cust.pagenm).subscribe(
      result => {
        this.Submitdata = result;
        this.cust ={};
        console.log( this.Submitdata);
        this.getcustomerdetailsList();
        this.isShowTble = true;
        this.isAddNew = false;
       
      }
    )};      
    //Retrieve all customer details
    getcustomerdetailsList() {
      this.infoService.getcustomerdetailsList()
          .subscribe(
            desigList => {
              // console.log(desigList)
              this.customerlist = desigList;
          },
          err => {
              console.log(err);
          }); 
    }
    //edit customer data
    editdata(editid)
    {
        this.cust = this.customerlist.filter(p=>p.idPerson==editid)[0];
        this.isAddNew = true;
        this.isShowTble = false;
        this.savebtn = false;
        this.updatebtn = true;
    }
    deletedata(deleteid)
    {
    }
    cancel(){   
      alert('by');
      this.isShowTble = true;
      this.isAddNew = false;
    }
}
