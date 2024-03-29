import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../dog.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
})
export class DogListComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(private dogService: DogService) {}

  ngOnInit() {
    this.dogService.getDogs().subscribe({
      next: (data) => {
        this.dogs = data;
        console.log(this.dogs);
      },
      error: (error) =>
        console.error('Hubo un error al obtener los perros', error),
    });
  }
}
