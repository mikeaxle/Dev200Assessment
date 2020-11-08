import { Animal } from './../../../Model/Animal';
import { AnimalService } from './../../../animal.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animalslist',
  templateUrl: './animalslist.component.html',
  styleUrls: ['./animalslist.component.sass'],
})
export class AnimalslistComponent implements OnInit {
  animals: Array<any>;
  constructor(private animalService: AnimalService, private router: Router) {}

  ngOnInit(): void {
    // get all animals
    this.animalService.get().subscribe((data: any) => {
      this.animals = data;
    });
  }

  // navigate to view animal page
  viewAnimal(animal) {
    this.router.navigate(['view-animal/' + animal.animalId], {
      state: animal,
    });
  }

  // navigate to edit animal page
  editAnimal(animal) {
    this.router.navigate(['edit-animal/' + animal.animalId], {
      state: animal,
    });
  }
}
