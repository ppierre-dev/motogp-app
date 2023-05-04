import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiloteFormComponent } from './pilote-form.component';

describe('PiloteFormComponent', () => {
  let component: PiloteFormComponent;
  let fixture: ComponentFixture<PiloteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiloteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiloteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
