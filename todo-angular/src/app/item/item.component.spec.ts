import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { Todo } from '../todo.model';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.todo = new Todo();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    component.todo.title = 'Test Title';
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('p').textContent).toContain('Test Title');
  });

  it('should dispatch delete event on button click', () => {
    component.todo.title = 'Test Title';
    fixture.detectChanges();

    component.delete.subscribe((todo) => {
      expect(todo.title).toBe('Test Title');
    });

    const clickEvent = document.createEvent('MouseEvent');
    clickEvent.initEvent('click');
    fixture.nativeElement.querySelector('button').dispatchEvent(clickEvent);
  });
});
