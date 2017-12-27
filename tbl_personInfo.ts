export class Info
{
    public idPerson?:number;
    public pName?:string;
    public pAddress?:string;
    public pTown?:string;
    public pPinCode?:number;
    public pMobilePrimary?:string;     
    public pMobileAlt?:string;   
    public pEmailId?:string;
   // public AddressList?  :AddressInfo[] = [];
    public CustomerList?:customerInfo[] = [];
    public WorkerList?:workerInfo[] = [];
    public SupplierList?:supplierInfo[] = [];
    public isActive?:number;
    public activeChgDT?:string;
    public activeChgBy?:number;
    public resultMsg?:string;
    public deginationId?:number;
    public addupdate?:number;
    public pagenm?:string;
    public UserId?:number;
}

export  class submitdata 
{
    addndata?:string
    value?:number
    Errormsg?:string
}
export class supplierInfo
{
       public personId?:number
       public idSupplier?:number;
       public acctId?:number;
}
 export class customerInfo
{
       public personId?:number
       public idCustomer?:number;
       public acctId?:number;
}
export class workerInfo
{
    public personId?:number
    public idWorker?:number;
    public acctId?:number;
    //public deginationId?:string
}
