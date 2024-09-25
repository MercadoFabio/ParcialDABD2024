import { VehiculeType } from "./mock-parking.data";

export interface Vehicle {
    brand?: string;
    model?: string;
    domain?: string;
    newDomain?: boolean;
    checkInTime: string; // Formato de hora 'hh:mm'
    vehicleType? : VehiculeType; 
}

