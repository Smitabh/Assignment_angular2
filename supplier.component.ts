import { Component, OnInit } from '@angular/core';
//import {infopersonstructure} from './model/infopersonstructure';
import { Info,workerInfo,submitdata} from './model/tbl_personInfo';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class SupplierComponent implements OnInit {
  name:string;
  headername:string;
  listname :string;
  designation:boolean;
  isAddNew:boolean = false;
  isShowTble:boolean;
  cust:Info = {};
  pagenm:string;

  constructor() { }

  ngOnInit() {
    this.name = "मालकाचे नाव";
    this.headername ="पुरवठादाराची माहिती";
    this.listname = "पुरवठादाराची यादी";
    this.designation = false;
    this.isAddNew = false;
    this.isShowTble = true;
    
  }
  HideShow()
  {
    debugger
    if(this.isShowTble)
    {
      this.isAddNew = true;
      this.isShowTble = false;
    }
    else{
      this.isShowTble = true;
      this.isAddNew = false;
    }
  }
}
