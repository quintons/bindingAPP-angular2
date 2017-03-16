import { BindingAppAngular2Page } from './app.po';

describe('binding-app-angular2 App', () => {
  let page: BindingAppAngular2Page;

  beforeEach(() => {
    page = new BindingAppAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
