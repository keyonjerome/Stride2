import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalloonInfoComponent } from './balloon-info.component';

describe('BalloonInfoComponent', () => {
  let component: BalloonInfoComponent;
  let fixture: ComponentFixture<BalloonInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalloonInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalloonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
