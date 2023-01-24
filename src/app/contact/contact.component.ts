import { Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  name: string="";
  email: string="";
  message: string=""

  submitForm() {
    const message = `Thanks ${this.name}! Your message has been sent to katie.m.tantillo@gmail.com. Look for a reply to ${this.email} within 24 hours.`;

    alert(message);
  }

}



