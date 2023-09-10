import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule,
    AuthFormComponent,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AuthenticationPage implements OnInit {

  private readonly router = inject(Router);

  readonly url: string = this.router.url.substring(1);
  pageTitle = 'Sign In';
  acctionButtonText = 'Sign In';

  constructor() { }

  ngOnInit() {
    if (this.url === 'signup') {
      this.pageTitle = 'Create your Account';
      this.acctionButtonText = 'Create Accoun';
    }

    if (this.url === 'reset'){
      this.pageTitle = 'Reset your Password';
      this.acctionButtonText = 'Reset Password';
    }
  }
  725389
  handleUserCredentials(userCredentials){

    const { email, password } = userCredentials;
    switch (this.url) {<

  }
}
