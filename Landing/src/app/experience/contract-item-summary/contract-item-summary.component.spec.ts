import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractItemSummaryComponent } from './contract-item-summary.component';

describe('ContractItemSummaryComponent', () => {
  let component: ContractItemSummaryComponent;
  let fixture: ComponentFixture<ContractItemSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractItemSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractItemSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
