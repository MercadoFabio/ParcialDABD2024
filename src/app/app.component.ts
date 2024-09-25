import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParkingSlotRequestComponent } from "./parking-slot-form.component/parking-slot-form.component";
import { ParseError } from '@angular/compiler';
import { ParkingMapComponent } from './parking-map/parking-map.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParkingSlotRequestComponent, ParkingMapComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  onNewParkingRequested() {
    this.toggleView = !this.toggleView;
  }
 
  title = 'parking-lot';
  toggleView = true;

  onShowForm() {
    this.toggleView = !this.toggleView;
  }

}
