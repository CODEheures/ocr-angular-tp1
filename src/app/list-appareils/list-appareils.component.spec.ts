import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppareilsComponent } from './list-appareils.component';

describe('ListAppareilsComponent', () => {
  let component: ListAppareilsComponent;
  let fixture: ComponentFixture<ListAppareilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAppareilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppareilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
