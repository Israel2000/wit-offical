import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DbServiceService } from '../shared/db-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  public contactsForm: FormGroup;  // Define FormGroup to student's form

  constructor(
    public crudApi: DbServiceService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService,  // Toastr service for alert message
  ) { }

  ngOnInit(): void {

    this.crudApi.GetContactsList();  // Call GetStudentsList() before main form is being called
    this.contactForm()
  }
  contactForm() {
    this.contactsForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.maxLength(50)]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(15)]],
      message: ['', Validators.maxLength(200)]
    })
  }

  // Accessing form control using getters
  get name() {
    return this.contactsForm.get('name');
  }


  get email() {
    return this.contactsForm.get('email');
  }

  get mobileNumber() {
    return this.contactsForm.get('mobileNumber');
  }


  get message() {
    return this.contactsForm.get('message');
  }

  // Reset student form's values
  ResetForm() {
    this.contactsForm.reset();
  }


  submitContactsData(data) {

    console.log(data.valid)

    if (data.valid) {
      this.crudApi.AddContactUs(this.contactsForm.value); // Submit student data using CRUD API
      this.toastr.success('Hi, ' + this.contactsForm.controls['name'].value + '. We will contact you shortly.'); // Show success message when data is successfully submited
      this.ResetForm();  // Reset form when clicked on reset button
    }
    else {
      this.toastr.error('Please Fill the Mandatory Fields')
    }

  };
}
