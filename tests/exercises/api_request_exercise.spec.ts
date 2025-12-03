import { test } from "@playwright/test";

// ? Parametr request nám umožňuje práci s API (posílání, konfigurace...)
test("Exercise: Sending Simple Request", async ({ request }) => {
  await request.get("https://www.tredgate.cloud/courses");
});

test("GET Request with URL Parameter", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/eshop", {
    params: {
      userId: 123,
    },
  });
});

test("GET Request with Header", async ({ request }) => {
  await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train/header",
    {
      headers: {
        train: "Reguest s hlavickou",
      },
    }
  );
});
test("POST Request with JSON Body", async ({ request }) => {
  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train/body",
    {
      data: {
        stringProperty: "Ahoj",
        numberProperty: 666,
        booleanProperty: false,
      },
    }
  );
});
