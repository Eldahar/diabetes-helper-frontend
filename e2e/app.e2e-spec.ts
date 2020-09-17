import { DiabetesHelperFrontendPage } from './app.po';

describe('diabetes-helper-frontend App', () => {
  let page: DiabetesHelperFrontendPage;

  beforeEach(() => {
    page = new DiabetesHelperFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
