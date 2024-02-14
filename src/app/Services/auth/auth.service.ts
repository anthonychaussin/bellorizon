import {inject, Injectable} from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, user,
  User
} from "@angular/fire/auth";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  user$ = user(this.auth);
  private userSubscription: Subscription;
  constructor() {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      //handle user state changes here. Note, that user will be null if there is no currently logged in user.
      console.log(aUser);
    })
  }
  register(email: string, password: string){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  login(email: string, password: string){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    this.auth.signOut();
    this.userSubscription.unsubscribe();
  }
}
