import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplemessageComponent } from './simplemessage.component';

describe('SimplemessageComponent', () => {
  let component: SimplemessageComponent;
  let fixture: ComponentFixture<SimplemessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplemessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
