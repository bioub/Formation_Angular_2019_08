import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  submitForm() {
    element(by.css('todo-form button')).click();
  }

  fillNewTodo(text) {
    element(by.css('todo-form input')).sendKeys(text);
  }

  getThirdTodo() {
    return element(by.css('todo-item:nth-of-type(3)')).getText() as Promise<string>;
  }

  getTitleText() {
    return element(by.css('todo-root .content span')).getText() as Promise<string>;
  }
}
