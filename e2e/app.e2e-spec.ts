import { WhichMonumentPage } from './app.po';

describe('which-monument App', () => {
  let page: WhichMonumentPage;

  beforeEach(() => {
    page = new WhichMonumentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
