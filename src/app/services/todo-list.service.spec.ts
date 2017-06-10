import { TestBed, inject } from '@angular/core/testing';

import { TodoListServiceService } from './todo-list-service.service.ts';

describe('TodoListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoListServiceService]
    });
  });

  it('should be created', inject([TodoListServiceService], (service: TodoListServiceService) => {
    expect(service).toBeTruthy();
  }));
});
