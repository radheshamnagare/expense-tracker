import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGraphComponent } from './manage-graph.component';

describe('ManageGraphComponent', () => {
  let component: ManageGraphComponent;
  let fixture: ComponentFixture<ManageGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
