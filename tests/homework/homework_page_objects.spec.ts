import { test } from "@playwright/test";
import { HomePage } from "../../src/pages/tredgate-eshop/home_page";
import { RegisterPage } from "../../src/pages/tredgate-eshop/register_page";

test("Registrace", async ({ page }) => {
  const home = new HomePage(page);
  const register = new RegisterPage(page);

  await home.open();
  await home.openRegistration();

  await register.fillRegistrationForm();
  await register.submit();
});
