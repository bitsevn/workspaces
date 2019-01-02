import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Workspace2Component } from './workspace2.component';

describe('Workspace2Component', () => {
  let component: Workspace2Component;
  let fixture: ComponentFixture<Workspace2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Workspace2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Workspace2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
