import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  standalone: true,
  imports: [FormsModule,CommonModule,JsonPipe],
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {
  isFormSubmited: boolean = false;

  userObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city:'',
    state: '',
    zipcode: '',
    isAggree: false 
  }

  onSubmit(form: NgForm) {
    debugger;
    const isFormValid = form.form.valid;
    this.isFormSubmited = true;
  }
}