import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomKittensComponent } from './random-kittens.component';

describe('RandomKittensComponent', () => {
  let component: RandomKittensComponent;
  let fixture: ComponentFixture<RandomKittensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomKittensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomKittensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
