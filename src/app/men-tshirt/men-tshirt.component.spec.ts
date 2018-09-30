import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenTshirtComponent } from './men-tshirt.component';

describe('MenTshirtComponent', () => {
  let component: MenTshirtComponent;
  let fixture: ComponentFixture<MenTshirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenTshirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenTshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
