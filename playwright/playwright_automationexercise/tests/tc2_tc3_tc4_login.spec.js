import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { SignInPage } from '../pages/SignInPage'

test('Test Case 2 and 4: Login User with correct email and password and logout', async ({ page }) => {
    const homePage = new HomePage(page)
    const signInPage = new SignInPage(page)

    // Navigate to Home page and select Sign In
    await homePage.goToAutomationExercisePage()
    await homePage.signUpLink.click()

    // Sign Up/In Page
    await signInPage.isLoginToYourAccountHeaderVisible()
    await signInPage.fillLoginEmailTextbox(signInPage.emailExistingUser)
    await signInPage.fillLoginPasswordTextbox(signInPage.passwordLoginUser)
    await signInPage.loginButton.click()

    // Home Page. The logged in account name is displayed
    await signInPage.isAccountName2Visible()
    await homePage.logoutLink.click()

    // Log out navigates back to Sign Up/In Page
    await homePage.isLoginVisible()
    await expect(page.getByText('Logged in as')).toBeHidden()
    //await homePage.isLoggedInAsHidden() 
    await homePage.isLoginToYourAccountVisible()
})

test('Test Case 3: Login User with incorrect email and password', async ({ page }) => {
    const homePage = new HomePage(page)
    const signInPage = new SignInPage(page)

    //Navigate to Home page and select Sign In
    await homePage.goToAutomationExercisePage()
    await homePage.signUpLink.click()

    // Sign Up/In Page
    await signInPage.isLoginToYourAccountHeaderVisible()
    await signInPage.fillLoginEmailTextbox(signInPage.emailNonExistingUser)
    await signInPage.fillLoginPasswordTextbox(signInPage.passwordLoginUser)
    await signInPage.loginButton.click()


    // Email/Password incorrect message appears
    await signInPage.isIncorrectPasswordVisible()
})