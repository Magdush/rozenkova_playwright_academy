import { test } from "@playwright/test";
import { HomePage } from "../../src/pages/pmtool/tredgate-eshop/home_page.ts";
import { RegisterPage } from "../../src/pages/pmtool/tredgate-eshop/register_page.ts";

test("Registrace", async ({ page }) => {
  const home = new HomePage(page);
  const register = new RegisterPage(page);

  await home.open();
  await home.openRegistration();

  await register.fillRegistrationForm();
  await register.submit();
});
