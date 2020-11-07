import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalslistComponent } from './animalslist.component';

describe('AnimalslistComponent', () => {
  let component: AnimalslistComponent;
  let fixture: ComponentFixture<AnimalslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
