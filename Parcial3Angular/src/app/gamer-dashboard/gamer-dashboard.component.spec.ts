import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerDashboardComponent } from './gamer-dashboard.component';

describe('GamerDashboardComponent', () => {
  let component: GamerDashboardComponent;
  let fixture: ComponentFixture<GamerDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamerDashboardComponent]
    });
    fixture = TestBed.createComponent(GamerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
