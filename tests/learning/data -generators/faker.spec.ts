import { faker } from "@faker-js/faker";
import { test} from "@playwright/test";
test ("Testing Data Generation with Faker", async ({page}) => {
    const firstName;
    const lastName = faker.pe