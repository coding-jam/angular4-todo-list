import { Angular4TodoListPage } from './app.po';

describe('angular4-todo-list App', () => {
  let page: Angular4TodoListPage;

  beforeEach(() => {
    page = new Angular4TodoListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
