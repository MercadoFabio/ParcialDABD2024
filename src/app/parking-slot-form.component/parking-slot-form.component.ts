import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MiscellaneousService } from '../services/miscellaneous.service';
import { VehiculeType, PARKING_LOT, PARKING_LOT_COPY } from '../services/data/mock-parking.data';
import { CommonModule } from '@angular/common';
import { ParkingService } from '../services/parking.service';
import { Vehicle } from '../services/data/vehicle';

@Component({
  selector: 'app-parking-slot-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parking-slot-form.component.html',
  styleUrl: './parking-slot-form.component.css',
  providers: [MiscellaneousService]
})
export class ParkingSlotRequestComponent implements OnInit {
  @Output() parkingSlotRequestSaved = new EventEmitter<boolean>();

  vehicleTypes = [] = [
    { id: VehiculeType.TRUCK, name: 'Camioneta' },
    { id: VehiculeType.CAR, name: 'Auto' },
    { id: VehiculeType.MOTORCYCLE, name: 'Moto' },
  ];

  brands: { id: number, name: string }[] = []
  
  model: Vehicle = {
    checkInTime: new Date().toLocaleTimeString("es-AR", { hour12: false }).slice(0, 5)
  };

  private miscService: MiscellaneousService = inject(MiscellaneousService)
  private parckinService: ParkingService = inject(ParkingService)

  ngOnInit(): void {
    this.brands = this.miscService.getBrands();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Formulario con campos invalidos');
      return;
    }
    this.parckinService.assignVehicleToParking(this.model);
    this.parkingSlotRequestSaved.emit(true)
    form.resetForm();
  }


}

