import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPassword } from './confirmPassword';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    senderName:new FormControl('', Validators.required),
    senderEmail:new FormControl('', [Validators.required, Validators.email]),
    senderPassword:new FormControl('', [Validators.required, Validators.minLength(6)]),
    senderConfirmPassword:new FormControl('', [Validators.required, confirmPassword('senderPassword')])
  })
}