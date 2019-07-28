import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display 20 regions', () => {
    page.navigateTo();
    expect(page.getRegions().count()).toEqual(20);
  });

  it('should display selected regions', () => {
    page.navigateTo();
    const regions = ['Toscana', 'Lazio'];

    regions.map(async region => {
      await page.getRegion(region).click();
      expect(page.getRegion(region)).toHaveClass('selected');
    });

    expect(page.getRegionsText()).toEqual('You selected: [ "Toscana", "Lazio" ]');
  });

  it('should toggle .selected class on region click', async () => {
    page.navigateTo();
    const toscana = page.getRegion('Toscana');
    await toscana.click();
    expect(toscana.getAttribute('class')).toMatch('selected');

    await toscana.click();
    expect(toscana.getAttribute('class')).not.toMatch('selected');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
