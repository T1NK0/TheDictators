import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Dictator } from './interfaces/dictators';
import { DictatorService } from './services/dictator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dictators: Dictator[] = [];

  constructor(private fb: FormBuilder, private dictatorService: DictatorService) {
  } 

  ngOnInit(): void {
    this.dictatorService.getDictators().subscribe((dictator:Dictator[] ) => {
      next: this.dictators = dictator;
    });
  }

  dictatorForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    birthyear: ['', Validators.required],
    deathyear: ['',],
    description: ['', Validators.required]
  });

  onCreate() {
    this.dictatorService.createDictator(this.dictatorForm.value).subscribe(() => {

    });
  }
}