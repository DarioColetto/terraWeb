import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotsBoxComponent } from './dots-box.component';

describe('DotsBoxComponent', () => {
  let component: DotsBoxComponent;
  let fixture: ComponentFixture<DotsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DotsBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
