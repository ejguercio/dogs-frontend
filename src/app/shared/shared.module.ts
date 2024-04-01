import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigateButtonComponent } from './navigate-button/navigate-button.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [NavigateButtonComponent, SpinnerComponent],
  imports: [CommonModule],
  exports: [
    NavigateButtonComponent,
    SpinnerComponent,
    // Exporta el componente para que pueda ser utilizado por módulos que importen SharedModule
  ],
})
export class SharedModule {}
