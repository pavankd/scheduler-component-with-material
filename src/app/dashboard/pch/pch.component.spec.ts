import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PchComponent } from './pch.component';

describe('PchComponent', () => {
  let component: PchComponent;
  let fixture: ComponentFixture<PchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
