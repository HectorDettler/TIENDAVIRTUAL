import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/HomeComponent.1';
import { BarranavegacionComponent } from "./barranavegacion/barranavegacion.component";
import { FooterComponent } from "./footer/footer.component";
import { TarjetaComponent as TarjetaComponent } from "./tarjeta/tarjeta.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, BarranavegacionComponent, FooterComponent, TarjetaComponent]
})
export class AppComponent {
  title = 'tiendaVirtual';
}
