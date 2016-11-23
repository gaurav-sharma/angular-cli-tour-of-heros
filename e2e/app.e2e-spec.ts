import { AngularCliTourOfHerosPage } from './app.po';

describe('angular-cli-tour-of-heros App', function() {
  let page: AngularCliTourOfHerosPage;

  beforeEach(() => {
    page = new AngularCliTourOfHerosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
