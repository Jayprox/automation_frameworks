import { test } from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { SignInPage } from '../pages/SignInPage'

test('Test Case 1: Register User', async ({ page }) => {
    const homePage = new HomePage(page)
    const signInPage = new SignInPage(page)

    await homePage.goToAutomationExercisePage()
    await homePage.isAutomationExerciseURL()

    // Enter new account fields
    await homePage.signUpLink.click()
    await signInPage.isNewUserSignUpHeadingVisible()
    await signInPage.fillNameTextbox(signInPage.nameNewUser)
    await signInPage.fillSignUpEmailTextbox(signInPage.emailNewUser)
    await signInPage.signUpButton.click()

    // Fill out Account Information
    await signInPage.mrCheckbox.click()
    await signInPage.fillNewAccountPasswordTextbox(signInPage.newAccountPassword)
    await signInPage.selectDay('3')
    await signInPage.selectMonth('April')
    await signInPage.selectYear('2005')
    await signInPage.newsletterCheckbox.click()
    await signInPage.fillFirstNameTextbox(signInPage.newAccountFirstName)
    await signInPage.fillLastNameTextbox(signInPage.newAccountLastName)
    await signInPage.fillAddress1Textbox(signInPage.newAccountAddress1)
    await signInPage.selectCountry('United States')
    await signInPage.fillStateTextbox(signInPage.newAccountState)
    await signInPage.fillCityTextbox(signInPage.newAccountCity)
    await signInPage.fillZipCodeTextbox(signInPage.newAccountZipCode)
    await signInPage.fillMobileNumberTextbox(signInPage.newAccountMobileNumber)
    await signInPage.createAccountButton.click()

    // Account Created page
    await signInPage.isAccountCreatedMessageVisible()
    await signInPage.continueButton.click()

    // Home Page. The logged in account name is displayed
    await signInPage.isAccountNameVisible()

    // Account Deleted PAge
    await homePage.deleteAccount.click()
    await signInPage.isAccountDeletedMessageVisible()
    await signInPage.continueButton.click()
    
})

test('Test Case 5: Register User with existing email', async ({page}) => {

    const homePage = new HomePage(page)
    const signInPage = new SignInPage(page)
    // Home paage
    
    await homePage.goToAutomationExercisePage()
    await homePage.signUpLink.click()

    // Sign In Page
    await signInPage.isNewUserSignUpHeadingVisible()

    // Sign In as existing user
    await signInPage.fillNameTextbox(signInPage.nameExistingUser)
    await signInPage.fillSignUpEmailTextbox(signInPage.emailExistingUser)
    await signInPage.signUpButton.click()

    // Existing Sign Up Message
    await signInPage.isExistingSignUpMessageVisible()
})