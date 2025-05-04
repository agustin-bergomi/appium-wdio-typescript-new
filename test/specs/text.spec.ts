it('should scroll and find Text element', async () => {
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Text")');
    const textSelector = await $('~Text');
    const isDisplayed = await textSelector.isDisplayed();
  
    // expect(normalButton).toBeDisplayed();
  });
  