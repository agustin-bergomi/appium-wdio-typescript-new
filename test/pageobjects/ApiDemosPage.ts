import { ChainablePromiseElement } from 'webdriverio';

class ApiDemosPage {
  private get accessibilityOption(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('~Accessibility');
  }

  private get accessibilityNodeQuerying(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('~Accessibility Node Querying');
  }

  public async selectAccessibility(): Promise<void> {
    await this.accessibilityOption.click();
  }

  public async isAccessibilityNodeQueryingDisplayed(): Promise<boolean> {
    return await this.accessibilityNodeQuerying.isDisplayed();
  }
}

export default new ApiDemosPage();
