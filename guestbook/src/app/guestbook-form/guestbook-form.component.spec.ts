import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestbookFormComponent } from './guestbook-form.component';

describe('GuestbookFormComponent', () => {
  let component: GuestbookFormComponent;
  let fixture: ComponentFixture<GuestbookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestbookFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestbookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
