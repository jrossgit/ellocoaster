import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcMenuComponent } from './ec-menu.component';

describe('EcMenuComponent', () => {
  let component: EcMenuComponent;
  let fixture: ComponentFixture<EcMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
