import { IotOrchardPage } from './app.po';

describe('iot-orchard App', function() {
  let page: IotOrchardPage;

  beforeEach(() => {
    page = new IotOrchardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
