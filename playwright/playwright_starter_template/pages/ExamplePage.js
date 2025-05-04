import { expect } from '@playwright/test';

export class ExamplePage {

    constructor(page) {
        this.page = page
        this.urlAddress = 'https://playwright.dev/'
        this.getStartedLink = page.getByRole('link', { name: 'Get started' })
        this.installationHeadingText = page.getByRole('heading', { name: 'Installation' })
    }

    async goToExamplePage() {
        await this.page.goto(this.urlAddress)
    }

    async titleHasSubstring() {
        await expect(this.page).toHaveTitle(/Playwright/)
    }

    async isInstallationHeadingVisible() {
        await expect(this.installationHeadingText).toBeVisible()
    }
}