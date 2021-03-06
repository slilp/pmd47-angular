import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadContentComponent } from './head-content.component';

describe('HeadContentComponent', () => {
  let component: HeadContentComponent;
  let fixture: ComponentFixture<HeadContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
