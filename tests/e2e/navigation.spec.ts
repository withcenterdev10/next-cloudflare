import test from "@playwright/test";

// type Account = {
//     username: string;
//     password: string;
// }

test.describe("Navigation Testing", () => {
    test.beforeEach(async({page}) => {
        await page.goto('/');
        await page.getByLabel("username").fill('John Doe');
        await page.getByLabel("password").fill('password123');
        await page.getByRole('button', {name: /submit/i}).click();
    });
})