import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ParkingService } from '../services/parking.service';
import { NumberToArrayPipe } from '../services/data/number-to-array.pipe';
import { VehiculeType } from '../services/data/mock-parking.data';
import { ParkingSlot } from '../services/data/parking.slot';

@Component({
  selector: 'app-parking-map',
  templateUrl: './parking-map.component.html',
  styleUrls: ['./parking-map.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, NumberToArrayPipe, CommonModule]
})
export class ParkingMapComponent implements OnInit{
  

  private readonly parkingService = inject(ParkingService);
  parkingLot : ParkingSlot[] = [];
  vehiculeTypes = VehiculeType;

  ngOnInit(): void {
    this.parkingLot = this.parkingService.getParkingLot();
  }

}
