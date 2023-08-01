import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcompontComponent } from './childcompont.component';

describe('ChildcompontComponent', () => {
  let component: ChildcompontComponent;
  let fixture: ComponentFixture<ChildcompontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildcompontComponent]
    });
    fixture = TestBed.createComponent(ChildcompontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
