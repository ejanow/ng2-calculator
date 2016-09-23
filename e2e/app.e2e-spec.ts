import { Ng2CalculatorPage } from './app.po';

describe('ng2-calculator App', function() {
  let page: Ng2CalculatorPage;

  beforeEach(() => {
    page = new Ng2CalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
