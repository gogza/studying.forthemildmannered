import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOfLearningComponent } from './item-of-learning.component';

describe('ItemOfLearningComponent', () => {
  let component: ItemOfLearningComponent;
  let fixture: ComponentFixture<ItemOfLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemOfLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOfLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
