import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-barranavegacion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './barranavegacion.component.html',
  styleUrl: './barranavegacion.component.css'
})
export class BarranavegacionComponent {

}
