import {test} from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { CartPage } from '../pages/CartPage'

test('Test Case 11: Verify Subscription in Cart page', async ({page}) => {
    const homePage = new HomePage(page)
    const cartPage = new CartPage(page)

    await homePage.goToAutomationExercisePage()

    // Scroll to Subscription
    await homePage.isSubscriptionVisible()

    // Cart Page
    await homePage.cartLink.click()
    await cartPage.isShoppingCartTextVisible()

    // Enter email
    await cartPage.fillEmailTextbox()
    await cartPage.subscribeButton.click()

    // Verify success message is displayed
    await cartPage.isShoppingCartTextVisible()
})