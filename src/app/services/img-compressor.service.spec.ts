import { TestBed } from '@angular/core/testing';

import { ImgCompressorService } from './img-compressor.service';

describe('ImgCompressorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImgCompressorService = TestBed.get(ImgCompressorService);
    expect(service).toBeTruthy();
  });
});
