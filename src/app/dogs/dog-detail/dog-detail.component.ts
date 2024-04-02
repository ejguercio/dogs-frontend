import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from '../../models/dog.interface';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css'],
})
export class DogDetailComponent implements OnInit {
  dog: Dog | undefined;

  constructor(private dogService: DogService, private route: ActivatedRoute) {}

  ngOnInit() {
    const dogId = this.route.snapshot.params['id'];

    this.dogService.getDogById(dogId).subscribe((dog) => {
      this.dog = dog[0];
    });
  }
}
