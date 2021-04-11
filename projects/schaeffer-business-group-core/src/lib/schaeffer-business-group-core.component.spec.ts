import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchaefferBusinessGroupCoreComponent } from './schaeffer-business-group-core.component';

describe('SchaefferBusinessGroupCoreComponent', () => {
  let component: SchaefferBusinessGroupCoreComponent;
  let fixture: ComponentFixture<SchaefferBusinessGroupCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchaefferBusinessGroupCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchaefferBusinessGroupCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
