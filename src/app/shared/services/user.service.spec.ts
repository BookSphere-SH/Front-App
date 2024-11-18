import { TestBed } from '@angular/core/testing';

import { UserService } from '../../../../../../../BookSphere_Perfil/src/app/shared/services/user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
