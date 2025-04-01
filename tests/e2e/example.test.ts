import { test, expect } from "@playwright/test";

test("has title", async ({page}) => {

    await page.goto("/");

    await expect(page).toHaveURL("http://localhost:3000/");
    await expect(page).toHaveTitle(/Create Next App/);
});
