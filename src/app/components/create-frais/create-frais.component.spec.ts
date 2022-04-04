import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateFraisComponent} from './create-frais.component';

describe('CreateFraisComponent', () => {
  let component: CreateFraisComponent;
  let fixture: ComponentFixture<CreateFraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFraisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
