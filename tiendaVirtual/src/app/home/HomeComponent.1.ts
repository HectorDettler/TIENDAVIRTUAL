import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  data:any;
  
  constructor(private _user:UsuariosService);
  
  ngOnInit(): void {
    this.getalluser();
  }

  

  getalluser() {
    this._user.getUsers().subscribe({next:(res)=>{this.data(res)}});
  }


}
