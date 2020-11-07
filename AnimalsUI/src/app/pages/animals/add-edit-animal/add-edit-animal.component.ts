import { AnimalService } from './../../../animal.service';
import { Animal } from './../../../Model/Animal';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-animal',
  templateUrl: './add-edit-animal.component.html',
  styleUrls: ['./add-edit-animal.component.sass'],
})
export class AddEditAnimalComponent implements OnInit {
  animalId: any;
  animal: any;
  animalForm: FormGroup;

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // init form group
    this.animalForm = new FormGroup({
      animalName: new FormControl('', Validators.required),
      animalSpecies: new FormControl('', Validators.required),
    });

    //get router param to check if in edit mode
    this.animal = window.history.state;

    // if animal updating, set animal name and species
    if (this.animal.animalId) {
      // patch form values
      this.animalForm.get('animalName').patchValue(this.animal.animalName);
      this.animalForm
        .get('animalSpecies')
        .patchValue(this.animal.animalSpecies);
    }
  }

  // function to add / update animal
  addOrUpdateAnimal(animalForm) {
    // get form value
    const data = animalForm.value;

    // get current data instance
    const date = new Date()

    // check if adding or updating
    if (!this.animal.animalId) {
      // add dates
      data.created = date.toISOString()
      data.updated = date.toISOString()

      // add to database
      this.animalService.add(data).subscribe(res => {
        console.log("animal added")
        console.log(res)
        alert("animal added")
      })
    } else {
      // update animal object
      this.animal.animalName = data.animalName;
      this.animal.animalSpecies = data.animalSpecies;
      this.animal.updated = date.toISOString()

      // update database
      this.animalService.update(this.animal).subscribe(res => {
        console.log("animal updated")
        console.log(res)
        alert("animal updated")
      })
    }
  }
}
