import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiloteDetailsComponent } from './pilote-details.component';

describe('PiloteDetailsComponent', () => {
  let component: PiloteDetailsComponent;
  let fixture: ComponentFixture<PiloteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiloteDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiloteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
