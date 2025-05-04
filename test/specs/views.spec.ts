import ViewsPage from '../pageobjects/ViewsPage';

describe('API Demos Navigation', () => {
  before(async () => {
    await browser.setTimeout({ implicit: 5000 });
  });

  it('should navigate to Views and find Buttons', async () => {
    await ViewsPage.openViews();
    await ViewsPage.openButtons();

    expect(await ViewsPage.buttonsOption).toBeDisplayed();
  });
});
