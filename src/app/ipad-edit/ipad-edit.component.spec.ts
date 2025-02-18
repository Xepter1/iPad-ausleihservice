import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadEditComponent } from './ipad-edit.component';

describe('IpadEditComponent', () => {
  let component: IpadEditComponent;
  let fixture: ComponentFixture<IpadEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpadEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
