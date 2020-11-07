import { Router } from '@angular/router';
import { AnimalService } from './../../../animal.service';
import { Animal } from './../../../Model/Animal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-animal',
  templateUrl: './view-animal.component.html',
  styleUrls: ['./view-animal.component.sass']
})
export class ViewAnimalComponent implements OnInit {
  animal: any
  constructor(private animalService: AnimalService, private router: Router) { }

  ngOnInit(): void {
      //get router param to check if in edit mode
      this.animal = window.history.state;
  }

  deleteAnimal(animal) {
    this.animalService.delete(this.animal.animalId)
    .subscribe(res => {
     this.router.navigate(['/'])
     .then(() => {
       alert("Animal Deleted")
     })
    })
  }

}
