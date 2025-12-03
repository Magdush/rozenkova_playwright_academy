// tests/learning/api/
// sending_api.spec.ts

import { test } from "@playwright/test";

// ? Parametr request nám umožňuje práci s API (posílání, konfigurace...)
test("Send GET Request", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/train");
});