import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitadoDashboardComponent } from './invitado-dashboard.component';

describe('InvitadoDashboardComponent', () => {
  let component: InvitadoDashboardComponent;
  let fixture: ComponentFixture<InvitadoDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvitadoDashboardComponent]
    });
    fixture = TestBed.createComponent(InvitadoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
