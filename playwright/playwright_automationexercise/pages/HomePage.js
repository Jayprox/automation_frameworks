import { expect } from '@playwright/test';

// pages/ProductPage.js
export class HomePage {
     
    constructor(page) {
        this.page = page;
        this.urlAddress = 'https://automationexercise.com'
        this.homeLink = page.getByRole('link', { name: ' Home' })
        this.signUpLink = page.getByRole('link', {name: ' Signup / Login'})
        this.cartLink = page.getByRole('link', {name: ' Cart'})
        this.contactUsLink = page.getByRole('link', {name: ' Contact us'})
        this.logoutLink = page.getByRole('link', {name: ' Logout'})
        this.testCasesLink = page.locator('#header').getByRole('link', { name: 'Test Cases' })
        this.productsLink = page.getByRole('link', {name: ' Products'})
        this.deleteAccount = page.getByRole('link', { name: ' Delete Account' })
        this.loginToYourAccount = page.locator('.login-form >> h2')
        this.loginToYourAccountText = 'Login to your account'
        this.loggedInAsText = page.getByText('Logged in as')
        this.homePageHeader = page.locator('#form >> .row >> div >> h2')
        this.subscriptionHeader =  page.getByRole('heading', { name: 'Subscription' })
        this.subscriptionEmailTextbox = page.getByRole('textbox', { name: 'Your email address' })
        this.userEmail = 'playwrightautotest2@test.com'
        this.subscribeButton = page.locator('#subscribe')
        this.successSubscribeMessage = page.getByText('You have been successfully subscribed!')
    }
  
    async goToAutomationExercisePage() {
      await this.page.goto(this.urlAddress);
    }

    async isAutomationExerciseURL() {
        await expect(this.page).toHaveURL(this.urlAddress)
    }

    async isLoginVisible() {
        await expect(this.signUpLink).toBeVisible()
    }

    async isLoginToYourAccountVisible() {
        await expect(this.loginToYourAccount).toHaveText(this.loginToYourAccountText)
    }

    async isLoggedInAsHidden() {
        await expect(this.loginToYourAccount).toBeHidden()
    }

    async isTestCasesVisible() {
        await expect(this.homePageHeader).toHaveText('Test Cases')
    }

    async isSubscriptionVisible() {
        await expect(this.subscriptionHeader).toBeVisible()
    }

    async fillSubscriptionEmailTextbox() {
        await this.subscriptionEmailTextbox.fill(this.userEmail)
    }

    async isSuccessMessageVisible() {
        await expect(this.successSubscribeMessage).toBeVisible()
    }
  }
  