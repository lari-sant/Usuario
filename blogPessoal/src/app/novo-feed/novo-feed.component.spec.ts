import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoFeedComponent } from './novo-feed.component';

describe('NovoFeedComponent', () => {
  let component: NovoFeedComponent;
  let fixture: ComponentFixture<NovoFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
