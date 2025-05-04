import {test} from '@playwright/test'
import { HomePage } from '../pages/homePage'

test('Test Case 7: Verify Test Cases Page', async ({page}) => {
    const homePage = new HomePage(page)

    await homePage.goToAutomationExercisePage()

    // Click on Test Cases button
    await homePage.testCasesLink.click()

    // Verify user is navigated to test cases page
    await homePage.isTestCasesVisible()
})