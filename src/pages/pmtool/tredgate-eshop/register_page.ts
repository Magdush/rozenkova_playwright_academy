import { Page } from "@playwright/test";

export class RegisterPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  firstName() { return this.page.locator('#input-firstname'); }
  lastName() { return this.page.locator('#input-lastname'); }
  email() { return this.page.locator('#input-email'); }
  telephone() { return this.page.locator('#input-telephone'); }
  password() { return this.page.locator('#input-password'); }
  passwordConfirm() { return this.page.locator('#input-confirm'); }
  continueButton() { return this.page.locator('input[type="submit"]'); }

  
  async fillRegistrationForm() {
    await this.firstName().fill("Test");
    await this.lastName().fill("User");
    await this.email().fill("test@test.cz");
    await this.telephone().fill("777123456");
    await this.password().fill("Password123");
    await this.passwordConfirm().fill("Password123");
  }

  async submit() {
    await this.continueButton().click();
  }
}

