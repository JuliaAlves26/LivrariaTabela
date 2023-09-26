import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovosLivrosComponent } from './novos-livros.component';

describe('NovosLivrosComponent', () => {
  let component: NovosLivrosComponent;
  let fixture: ComponentFixture<NovosLivrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovosLivrosComponent]
    });
    fixture = TestBed.createComponent(NovosLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
