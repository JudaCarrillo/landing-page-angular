import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  contacForm!: FormGroup;

  constructor(private formBuiler: FormBuilder) {
    this.contacForm = this.formBuiler.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  public enviar(event: Event) {
    event.preventDefault();
    console.log(this.contacForm.value);
  }

  public hasErrors(field: string, typeError: string) {
    return (
      this.contacForm.get(field)?.hasError(typeError) &&
      this.contacForm.get(field)?.touched
    );
  }

  ngOnInit(): void {}
}
