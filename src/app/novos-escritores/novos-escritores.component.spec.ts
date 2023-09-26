import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovosEscritoresComponent } from './novos-escritores.component';

describe('NovosEscritoresComponent', () => {
  let component: NovosEscritoresComponent;
  let fixture: ComponentFixture<NovosEscritoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovosEscritoresComponent]
    });
    fixture = TestBed.createComponent(NovosEscritoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
