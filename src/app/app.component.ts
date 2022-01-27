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

  //Sets our form to use the fb (formBuilder) group, and list the fields we have in the form, with the validations.
  dictatorForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    birthyear: ['', Validators.required],
    deathyear: [''],
    description: ['', Validators.required]
  });

  //Create function
  onCreate() {
    //Call our dictatorservce, and call the function called CreateDictator, using our dictatorform values, and subscribe on the function.
    this.dictatorService.createDictator(this.dictatorForm.value).subscribe(dictatorValue =>  this.dictatorForm.value);
  }

  //On our delete function send down our index
  onDelete(index:number) {
    //Call our dictatorService, and the function deleteDictator with the index-1 since we run it on the id we have added up from the array (so it would delete the wrong listed item as the one after.)
    this.dictatorService.deleteDictator(index).subscribe(dictatorValue =>  this.dictatorForm.value);

    //Deletes from our local array (the view)
    this.dictators.splice(index,1)
  }
}