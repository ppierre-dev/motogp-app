import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiloteCardComponent } from './pilote-card.component';

describe('PiloteCardComponent', () => {
  let component: PiloteCardComponent;
  let fixture: ComponentFixture<PiloteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiloteCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiloteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
