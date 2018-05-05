import { appRouterModule } from './router.module';

describe('appRouterModule', () => {
  let routerModule: appRouterModule;

  beforeEach(() => {
    routerModule = new appRouterModule();
  });

  it('should create an instance', () => {
    expect(routerModule).toBeTruthy();
  });
});
