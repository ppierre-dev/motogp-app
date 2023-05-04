import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiloteComponent } from './pilote.component';

describe('PiloteComponent', () => {
  let component: PiloteComponent;
  let fixture: ComponentFixture<PiloteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiloteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
