import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAppareilComponent } from './detail-appareil.component';

describe('DetailAppareilComponent', () => {
  let component: DetailAppareilComponent;
  let fixture: ComponentFixture<DetailAppareilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAppareilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
