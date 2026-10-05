import { customTest } from "./fixtures/fixtures";
import { expect } from "@playwright/test";

customTest("@fixture Fixture Demo", async ({ authenticatedPage }) => {

    await expect(authenticatedPage).toHaveURL(
        "https://rahulshettyacademy.com/client/#/dashboard/dash"
    );

});
