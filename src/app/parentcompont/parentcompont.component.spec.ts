import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcompontComponent } from './parentcompont.component';

describe('ParentcompontComponent', () => {
  let component: ParentcompontComponent;
  let fixture: ComponentFixture<ParentcompontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentcompontComponent]
    });
    fixture = TestBed.createComponent(ParentcompontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
