import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../../models/dog.interface';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
})
export class DogListComponent implements OnInit {
  dogs: Dog[] = []; // Todos los perros
  paginatedDogs: Dog[] = []; // perros de la pagina actual
  currentPage = 1;
  itemsPerPage = 8;
  Math = Math; // Exponer Math para usar en la plantilla

  constructor(private dogService: DogService) {}

  ngOnInit() {
    this.dogService.getDogs().subscribe({
      next: (data) => {
        this.dogs = data;
        // console.log(this.dogs);
      },
      error: (error) =>
        console.error('Hubo un error al obtener los perros', error),
    });
  }
  paginateDogs() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedDogs = this.dogs.slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
  }

  // Método para cambiar de página
  setCurrentPage(page: number, event: MouseEvent): void {
    event.preventDefault(); // Previene la redirección
    this.currentPage = page;
    // Aquí puedes agregar cualquier lógica adicional necesaria cuando se cambia de página
  }
}
