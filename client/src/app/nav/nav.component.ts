import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(public accounts:AccountService, private router:Router, private toastr : ToastrService) { }

  ngOnInit(): void {
    
  }

  Login()
  {
    this.accounts.Login(this.model).subscribe(respone =>
      {
        this.router.navigateByUrl('/members');
      }, error =>
      {
        console.log(error);
        this.toastr.error(error.error)
      })
  }

  Logout()
  {
    this.accounts.logout();
    this.router.navigateByUrl('/');
    localStorage.clear();
  }

}
