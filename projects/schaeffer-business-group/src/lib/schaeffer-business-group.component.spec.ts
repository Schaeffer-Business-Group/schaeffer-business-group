import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchaefferBusinessGroupComponent } from './schaeffer-business-group.component';

describe('SchaefferBusinessGroupComponent', () => {
  let component: SchaefferBusinessGroupComponent;
  let fixture: ComponentFixture<SchaefferBusinessGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchaefferBusinessGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchaefferBusinessGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
