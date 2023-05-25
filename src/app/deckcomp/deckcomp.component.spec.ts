import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckcompComponent } from './deckcomp.component';

describe('DeckcompComponent', () => {
  let component: DeckcompComponent;
  let fixture: ComponentFixture<DeckcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeckcompComponent]
    });
    fixture = TestBed.createComponent(DeckcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
