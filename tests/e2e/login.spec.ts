import { test, expect } from "@playwright/test";

test.describe("Login Page", () => {
  test("should successfully log in with valid credentials", async ({ page }) => {
    await page.goto("/");

    await page.fill("#username", "testuser");
    await page.fill("#password", "password123");
    await page.click("button[type='submit']");

    await expect(page).toHaveURL("/homepage");
    await expect(page.locator("text=Welcome")).toBeVisible();
  });

  test("should show validation errors for empty fields", async ({ page }) => {
    await page.goto("/");

    await page.click("button[type='submit']");

    await expect(page.locator("#username:invalid")).toBeVisible();
    await expect(page.locator("#password:invalid")).toBeVisible();
  });
});
