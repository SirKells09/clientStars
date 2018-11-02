import { TestBed } from '@angular/core/testing';

import { GoalListService } from './goal-list.service';

describe('GoalListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoalListService = TestBed.get(GoalListService);
    expect(service).toBeTruthy();
  });
});
