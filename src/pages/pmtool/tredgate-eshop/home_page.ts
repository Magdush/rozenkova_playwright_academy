import { Page } from "@playwright/test";

export class HomePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  myAccountIcon() {
    return this.page.locator("#top-links a i.fa-user");
  }

  registerLink() {
    return this.page.locator(
      '.dropdown-menu a[href="https://tredgate.com/eshop/index.php?route=account/register"]'
    );
  }

  async open() {
    await this.page.goto("https://tredgate.com/eshop/");
  }

  async openRegistration() {
    await this.myAccountIcon().click();
    await this.registerLink().click();
  }
}
