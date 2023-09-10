import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Input, Output, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  standalone: true,

  imports: [
    IonicModule, ReactiveFormsModule, CommonModule
  ]
})

export class AuthFormComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);

  @Input() actionButtonText = 'Sign In';
  @Input() isPasswordResetPage = false;
  @Output() formSubmitted = new EventEmitter<any>();

  readonly authForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: [
      '',
      Validators.compose([
        !this.isPasswordResetPage ? Validators.required : null,
        Validators.minLength(6),
      ]),
    ],
  });

  submitCredentials(authForm: FormGroup): void {
    if (!authForm.valid) {
      console.log('Form is not valid yet, current value:', authForm.value);
    } else {
      const credentials = {
        email: authForm.value.email,
        password: authForm.value.password,
      };
      this.formSubmitted.emit(credentials);
    }
  }

  constructor() { }

  ngOnInit() { }

}
