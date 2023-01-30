import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCpfComponent } from './card-cpf.component';

describe('CardCpfComponent', () => {
  let component: CardCpfComponent;
  let fixture: ComponentFixture<CardCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCpfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
