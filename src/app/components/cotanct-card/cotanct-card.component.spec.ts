import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotanctCardComponent } from './cotanct-card.component';

describe('CotanctCardComponent', () => {
  let component: CotanctCardComponent;
  let fixture: ComponentFixture<CotanctCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CotanctCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotanctCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
