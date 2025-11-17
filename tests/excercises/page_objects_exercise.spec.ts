import { test } from "@playwright/test";
import { LoginPage } from "tests/src/pages/pmtool/login_page.ts";
import { Dash } from "tests/src/pages/pmtool/login_page.ts";

test("PageObjects Exercise - Login and Logout", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.open();
  await loginPage.login("pw_skoleni", "TEG2023");
  await dashboardPage.clickProfile();
  await dashboardPage.clickLogout();
});
