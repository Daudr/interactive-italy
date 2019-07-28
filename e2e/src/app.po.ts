import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getRegions() {
    return element.all(by.css('path'));
  }

  getRegion(region: string) {
    return element(by.css(`[title="${region}"]`));
  }

  getRegionsText() {
    return element(by.css('h3')).getText();
  }
}
