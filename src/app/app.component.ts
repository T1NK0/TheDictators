import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Dictator } from './interfaces/dictators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FormBuilder) {
    
  } 

  dictatorData = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
  });
}