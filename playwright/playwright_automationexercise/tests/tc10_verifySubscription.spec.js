import {test} from '@playwright/test'
import { HomePage } from '../pages/homePage'

test('Test Case 10: Verify Subscription in home page', async ({page}) => {
    const homePage = new HomePage(page)

    await homePage.goToAutomationExercisePage()

    // Scroll to Subscription
    await homePage.isSubscriptionVisible()

    // Enter email
    await homePage.fillSubscriptionEmailTextbox()
    await homePage.subscribeButton.click()

    // Verify success message is displayed
    await homePage.fillSubscriptionEmailTextbox()
})