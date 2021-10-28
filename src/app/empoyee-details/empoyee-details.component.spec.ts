import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoyeeDetailsComponent } from './empoyee-details.component';

describe('EmpoyeeDetailsComponent', () => {
  let component: EmpoyeeDetailsComponent;
  let fixture: ComponentFixture<EmpoyeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpoyeeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpoyeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
