import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('Welcome to quiz-engine!');
=======
    expect(page.getParagraphText()).toEqual('Welcome to offline-quiz-engine!');
>>>>>>> 2804284384fd17627747f2f6ef168725224505e3
  });
});
