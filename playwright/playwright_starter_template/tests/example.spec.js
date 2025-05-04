// @ts-check
import { test } from '@playwright/test';
import { ExamplePage } from '../pages/ExamplePage';

test('has title', async ({ page }) => {
  const examplePage = new ExamplePage(page)

  await examplePage.goToExamplePage()

  // Expect a title "to contain" a substring.
  await examplePage.titleHasSubstring()
});

test('get started link', async ({ page }) => {
  const examplePage = new ExamplePage(page)

  await examplePage.goToExamplePage()

  // Click the get started link.
  await examplePage.getStartedLink.click()

  // Expects page to have a heading with the name of Installation.
  await examplePage.isInstallationHeadingVisible()
});
