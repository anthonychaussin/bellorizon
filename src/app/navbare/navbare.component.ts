import {Component, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../Services/auth/auth.service";
import {User} from "@angular/fire/auth";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navbare',
  templateUrl: './navbare.component.html',
  styleUrls: ['./navbare.component.scss']
})
export class NavbareComponent implements OnDestroy{
  user: User | null = null;
  private userSubscriber: Subscription;
  constructor(public router: Router, private authService: AuthService) {
    this.userSubscriber = authService.user$.subscribe(user => this.user = user);
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.logout();
    this.userSubscriber.unsubscribe();
  }
}
