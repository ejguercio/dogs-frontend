import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigateButtonComponent } from './navigate-button/navigate-button.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavigateButtonComponent, SpinnerComponent, NavbarComponent],
  imports: [CommonModule],
  exports: [
    NavigateButtonComponent,
    SpinnerComponent,
    NavbarComponent,
    // Exporta el componente para que pueda ser utilizado por módulos que importen SharedModule
  ],
})
export class SharedModule {}
