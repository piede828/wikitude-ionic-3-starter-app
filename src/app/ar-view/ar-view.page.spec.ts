import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArViewPage } from './ar-view.page';

describe('ArViewPage', () => {
  let component: ArViewPage;
  let fixture: ComponentFixture<ArViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
