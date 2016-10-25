import { Ng2YoutubeSearchPage } from './app.po';

describe('ng2-youtube-search App', function() {
  let page: Ng2YoutubeSearchPage;

  beforeEach(() => {
    page = new Ng2YoutubeSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
