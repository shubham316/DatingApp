import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { AccountService } from '_services/account.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  currentUser$: Observable<User>;

  constructor(public accounts:AccountService) { }

  ngOnInit(): void {
    
  }

  Login()
  {
    this.accounts.Login(this.model).subscribe(respone =>
      {
        console.log(respone);
      }, error =>
      {
        console.log(error);
      })
  }

  Logout()
  {
    this.accounts.logout();
  }

}
