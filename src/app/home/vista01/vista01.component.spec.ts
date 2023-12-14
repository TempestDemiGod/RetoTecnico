import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista01Component } from './vista01.component';

describe('Vista01Component', () => {
  let component: Vista01Component;
  let fixture: ComponentFixture<Vista01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Vista01Component]
    });
    fixture = TestBed.createComponent(Vista01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
