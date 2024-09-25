import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingMapComponent } from './parking-map.component';

describe('ParkingMapComponent', () => {
  let component: ParkingMapComponent;
  let fixture: ComponentFixture<ParkingMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
