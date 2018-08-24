import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThridPageComponent } from './thrid-page.component';

describe('ThridPageComponent', () => {
  let component: ThridPageComponent;
  let fixture: ComponentFixture<ThridPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThridPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
