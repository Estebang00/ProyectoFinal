import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopersonalComponent } from './infopersonal.component';

describe('InfopersonalComponent', () => {
  let component: InfopersonalComponent;
  let fixture: ComponentFixture<InfopersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfopersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
