import { BillMakerPage } from './app.po';

describe('bill-maker App', () => {
  let page: BillMakerPage;

  beforeEach(() => {
    page = new BillMakerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
