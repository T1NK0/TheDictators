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
  dataloaded: boolean = false;

  constructor(private fb: FormBuilder, private dictatorService: DictatorService) {
  } 

  ngOnInit(): void {
    this.dictatorService.getDictators().subscribe((dictator:Dictator[] ) => {
      next: this.dictators = dictator;
      complete: if (dictator.length>0) {
        this.dataloaded = true
      } 
      this.dataloaded = true;
    });
  }

  dictatorForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    birthyear: ['', Validators.required],
    deathyear: [''],
    description: ['', Validators.required]
  });

  onCreate() {
    this.dictatorService.createDictator(this.dictatorForm.value).subscribe(dictatorValue =>  this.dictatorForm.value);
  }

  onDelete(index:number) {
    //Deletes from our local array
    this.dictators.splice(index,1)
    this.dictatorService.deleteDictator(index).subscribe(() => {

    });
  }
}