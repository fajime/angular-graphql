import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public formContact: FormGroup;

  constructor( private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm() {
    this.formContact = this.fb.group({
      age: [null, Validators.min(18)],
      name: ['', Validators.required],
      terminos: [false, Validators.requiredTrue],
      
    });
  }

  public onSubmit() {
    console.log(this.formContact.value, this.formContact.valid);
    
  }

}
