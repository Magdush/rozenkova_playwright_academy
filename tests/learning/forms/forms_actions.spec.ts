import { test } from "@playwright/test";

test.describe("Forms Actions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/registration.html");
  });

  test("fill and pressSequantially", async ({ page }) => {
    const nameInput = page.locator("#name");
    await nameInput.fill("Start"); //* 1. vyplnění pole
    await nameInput.fill("End"); //* 2. vyplění pole  -fill přepíše už stávající hodnotu
    await nameInput.pressSequentially("Kde toto bude?"); //* Vyplnění pomocí simulace psaní na klávesnici (jeden znak za druhým) ->nemaže stávající hodnoty v poli
    await nameInput.clear(); //* vyčistí hodnoty v inputu, není potřeba s fill
    await nameInput.pressSequentially("Pomalu píšu", { delay: 500 }); //* delay - prodleva mezi jednotlivými znaky
  });
});
