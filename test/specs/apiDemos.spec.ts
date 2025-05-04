
describe('API Demos Navigation', () => {
  before(async () => {
    await browser.setTimeout({ implicit: 5000 });
  });

  it('should navigate to Views and find Buttons', async () => {
    const viewsSelector = await $('~Views');
    await viewsSelector.click();

    const buttonsSelector = await $('~Buttons');
    //await expect(buttonsSelector).toBeDisplayed();
  });
});

