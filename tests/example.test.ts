import { test, expect } from "@playwright/test";

test("has title", async ({page}) => {

    await page.goto("/");

    await expect(page).toHaveTitle(/Create Next App/);
    await page.getByText('Deploy').click();
    await expect(page).toHaveURL('https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app')
});
