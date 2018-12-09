import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcSelectorComponent } from './ec-selector.component';

describe('EcSelectorComponent', () => {
  let component: EcSelectorComponent;
  let fixture: ComponentFixture<EcSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
