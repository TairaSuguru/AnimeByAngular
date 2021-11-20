import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeHeadComponent } from './anime-head.component';

describe('AnimeHeadComponent', () => {
  let component: AnimeHeadComponent;
  let fixture: ComponentFixture<AnimeHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
