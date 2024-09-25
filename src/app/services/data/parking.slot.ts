import { VehiculeType } from "./mock-parking.data";

export interface ParkingSlot{
    vehicules: VehiculeType[];
    availablePlaces: number;
    totalPlaces: number;
}