import { MagevoV4Page } from './app.po';

describe('magevo-v4 App', () => {
  let page: MagevoV4Page;

  beforeEach(() => {
    page = new MagevoV4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
