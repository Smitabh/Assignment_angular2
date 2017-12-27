
import { Component,OnInit } from '@angular/core';
import { UserLoginstructure}from './login/model/UserLoginstructure';
import { LoginService,ILogin} from './login/service/login.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    userloginStructure:UserLoginstructure = {};
    isVisible:boolean = false;
    iLogin:ILogin;
    UserName:string;
    constructor(private _loginService:LoginService, private router:Router
    )
    {}
    ngOnInit()
    {
      this.iLogin =this._loginService.Ilogin;
      this.UserName = 'Welcome ' + localStorage.getItem("Username");
    }
    LogOut()
    {
      this._loginService.isNotLogin();
      this.router.navigate(['/'],);

    }
}