import { Injectable } from '@angular/core';
import { ContactUsForm } from './conctactUsForm.model';  // Student data type interface class
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  ContactsRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  ContactRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too


  constructor(private db: AngularFireDatabase) {}

    // Create ContactUs
    AddContactUs(contact: ContactUsForm) {
      this.ContactsRef.push({
        name: contact.name,
        email: contact.email,
        mobileNumber: contact.mobileNumber,
        message: contact.message
      })
    }

      // Fetch Single Contact Object
  GetContact(id: string) {
    this.ContactRef = this.db.object('contacts/' + id);
    return this.ContactRef;
  }

    // Fetch Contacts List
    GetContactsList() {
      this.ContactsRef = this.db.list('contacts');
      return this.ContactsRef;
    }
}
