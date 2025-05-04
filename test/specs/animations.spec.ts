import AnimationsPage from '../pageobjects/AnimationsPage';

describe('API Demos Navigation', () => {
    before(async () => {
    await browser.setTimeout({ implicit: 5000})
    })

    it('should navigate to Animation and find Bouncing Balls', async () => {
    await AnimationsPage.openAnimations()
    await AnimationsPage.openBouncingBalls()

  
    //expect(isDisplayed).to.be.true;
  });
  
})