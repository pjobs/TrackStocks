import { PvModule } from './pv.module';

describe('PvModule', () => {
  let pvModule: PvModule;

  beforeEach(() => {
    pvModule = new PvModule();
  });

  it('should create an instance', () => {
    expect(pvModule).toBeTruthy();
  });
});
