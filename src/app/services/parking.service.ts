import { Injectable } from '@angular/core';
import { PARKING_LOT_COPY, VehiculeType } from './data/mock-parking.data';
import { Vehicle } from './data/vehicle';
import { ParkingSlot } from './data/parking.slot';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  private readonly parkingLot : ParkingSlot[] = [...PARKING_LOT_COPY];
 
  // Obtiene el estado actual del estacionamiento
  getParkingLot() {
    return this.parkingLot;
  }

  // Asigna un vehículo a una plaza disponible según el tipo de vehículo y actualiza la disponibilidad
  assignVehicleToParking(vehicle: Vehicle): boolean {
    const vehicleTypeNumber = Number(vehicle.vehicleType);
    let requiredSpaces: number = this.getRequiredSpace(vehicleTypeNumber);

    // Busca una plaza disponible que tenga suficiente espacio
    for (let slot of this.parkingLot) {
      if (slot.availablePlaces >= requiredSpaces) {
        slot.vehicules.push(vehicleTypeNumber);  // Asigna el vehículo a la plaza
        slot.availablePlaces -= requiredSpaces;  // Actualiza los lugares disponibles
        return true; // Asignación exitosa
      }
    }

    // No se encontró una plaza disponible con el espacio suficiente
    return false;
  }


  // Retorna el espacio requerido para cada tipo de vehículo
  private getRequiredSpace(vehicleType: VehiculeType): number {
    switch (vehicleType) {
      case VehiculeType.TRUCK: return 8;
      case VehiculeType.CAR: return 4;
      case VehiculeType.MOTORCYCLE: return 1;
      default: return 0;
    }
  }

}
