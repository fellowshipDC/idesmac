import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocenosComponent } from './conocenos.component';

describe('ConocenosComponent', () => {
  let component: ConocenosComponent;
  let fixture: ComponentFixture<ConocenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConocenosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConocenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
