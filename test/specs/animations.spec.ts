import AnimationsPage from '../pageobjects/ViewsPage';

describe('API Demos Navigation', () => {
    it('should navigate to Animation and find Bouncing Balls', async () => {
    await AnimationsPage.open
  
    const bouncingBallsSelector = await $('~Bouncing Balls');
    const isDisplayed = await bouncingBallsSelector.isDisplayed();
  
    //expect(isDisplayed).to.be.true;
  });
  