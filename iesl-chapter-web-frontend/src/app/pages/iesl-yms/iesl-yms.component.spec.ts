import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IeslYmsComponent } from './iesl-yms.component';

describe('IeslYmsComponent', () => {
  let component: IeslYmsComponent;
  let fixture: ComponentFixture<IeslYmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IeslYmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IeslYmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
