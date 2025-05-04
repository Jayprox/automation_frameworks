import { expect } from '@playwright/test'

export class CartPage {

    constructor(page){
        this.page = page
        this.shopppingCartText = page.getByText('Shopping Cart')
        this.subscribeButton = page.locator('#subscribe')
        this.emailText = 'playwrightautotest2@test.com'
        this.emailTextbox = page.getByRole('textbox', { name: 'Your email address' })
        this.successSubscribedMessage = page.getByText('You have been successfully subscribed!')
    }

    async isShoppingCartTextVisible() {
        await expect(this.shopppingCartText).toBeVisible()
    }

    async fillEmailTextbox() {
        await this.emailTextbox.fill(this.emailText)
    }

    async isSuccessSubscribedMessageVisible() {
        await expect(this.successSubscribedMessage).toBeVisible()
    }

}