const { expect } = require('@playwright/test');

exports.ObjectPage = class ObjectPage {
  constructor(page) {
    this.page = page;

    this.credit = page.locator('button.button.button--medium.button--navy.ng-star-inserted');

    this.buy = page.locator(
      'button.buy-button.button.button--with-icon.button--green.button--medium.ng-star-inserted'
    );
    this.close_modal = page.locator('button.modal__close');
  }

  async click_buy() {
    await expect(this.credit).toHaveText('Купить в кредит', {timeout: 50000});
    await this.buy.click();
    await this.close_modal.isVisible();
    await this.close_modal.click();
  }
};
