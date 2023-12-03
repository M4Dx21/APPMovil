
import { browser } from 'protractor';

describe('App', () => {
  it('should navigate to the home page', () => {
    browser.get('/');
    expect(browser.getCurrentUrl()).toContain('/home');
  });
});
