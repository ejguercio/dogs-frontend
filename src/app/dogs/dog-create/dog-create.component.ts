import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-create',
  templateUrl: './dog-create.component.html',
  styleUrls: ['./dog-create.component.css'],
})
export class DogCreateComponent {
  dogForm: FormGroup;
  temperaments = [
    'Playful',
    'Calm',
    'Energetic',
    'Independent',
    'Affectionate',
  ];

  constructor(
    private formBuilder: FormBuilder,
    private dogService: DogService
  ) {
    this.dogForm = this.formBuilder.group({
      name: ['', Validators.required],
      minWeight: ['', Validators.required],
      maxWeight: ['', Validators.required],
      minHeight: ['', Validators.required],
      maxHeight: ['', Validators.required],
      minLife: ['', Validators.required],
      maxLife: ['', Validators.required],
      selectedTemperaments: [[], Validators.required],
    });
  }

  onSubmit() {
    if (this.dogForm.valid) {
      console.log(this.dogForm.value);
      // Aquí puedes enviar los datos del formulario al servidor
      this.dogService
        .formatAndPost(this.dogForm.value)
        .subscribe((res) => console.log(res));
    }
  }
}
