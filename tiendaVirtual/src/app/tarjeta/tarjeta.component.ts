
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';


@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {

  card = [{
    titulo: 'primera card',
    descripcion: 'parece que funciona',
    imagen: 'https://pccom.cl/wp-content/uploads/2019/03/MOUSE-DATACOM-7-BOTONES.jpg'
    
  },
  {
    titulo: 'segunda card',
    descripcion: 'se ve que funciona',
    imagen: 'https://pccom.cl/wp-content/uploads/2019/03/MOUSE-DATACOM-7-BOTONES.jpg'
   
  },
  {
    titulo: 'tercera card',
    descripcion: 'si esta funcionando',
    imagen: 'https://pccom.cl/wp-content/uploads/2019/03/MOUSE-DATACOM-7-BOTONES.jpg'
    
  }
  ];

  


}

