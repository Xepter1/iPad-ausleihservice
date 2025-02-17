import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilsbiburgComponent } from './vilsbiburg.component';

describe('VilsbiburgComponent', () => {
  let component: VilsbiburgComponent;
  let fixture: ComponentFixture<VilsbiburgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VilsbiburgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VilsbiburgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
