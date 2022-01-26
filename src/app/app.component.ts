import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Dictator } from './interfaces/dictators';
import { CreationService } from './services/creation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FormBuilder, private createService: CreationService) {
    
  } 

  dictatorData = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    birthyear: ['', Validators.required],
    deathyear: ['',],
    description: ['', Validators.required]
  });
}