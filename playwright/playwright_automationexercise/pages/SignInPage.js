import { expect } from '@playwright/test'

export class SignInPage {

    constructor(page) {
        this.page = page
        this.accountCreatedText = page.getByText('Account Created!');
        this.accountDeletedText = page.getByText('Account Deleted!');
        this.continueButton = page.getByRole('link', { name: 'Continue' });
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
        this.emailExistingUser = 'playwrightautotest2@test.com';
        this.emailNonExistingUser = 'playwrightautotest222@test.com';
        this.emailNewUser = 'playwrightautotest1@test.com';
        this.emailSignUpTextbox = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        this.emailLoginTextbox = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
        this.existingSignUpMessage = page.getByText('Email Address already exist!');
        this.loggedInAs = page.locator('.shop-menu');
        this.mrCheckbox = page.getByRole('radio', { name: 'Mr.' });
        this.mrsCheckbox = page.getByRole('radio', { name: 'Mrs.' });
        this.nameExistingUser = 'PlaywrightAutoTest2';
        this.nameNewUser = 'PlaywrightAutoTest1';
        this.nameTextbox = page.getByRole('textbox', { name: 'Name' });
        this.newAccountAddress1 = '123 Fake St';
        this.newAccountAddress1Textbox = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
        this.newAccountCity = 'San Francisco';
        this.newAccountCityTextbox = page.getByRole('textbox', { name: 'City * Zipcode *' });
        this.newAccountFirstName = 'PlaywrightAuto';
        this.newAccountFirstNameTextbox = page.getByRole('textbox', { name: 'First name *' });
        this.newAccountLastName = 'Test1';
        this.newAccountLastNameTextbox = page.getByRole('textbox', { name: 'Last name *' });
        this.newAccountMobileNumber = '1234567890';
        this.newAccountMobileNumberTextbox = page.getByRole('textbox', { name: 'Mobile Number *' });
        this.newAccountPassword = 'playwrightautopass1';
        this.newAccountPasswordTextbox = page.getByRole('textbox', { name: 'Password *' });
        this.newAccountState = 'CA';
        this.newAccountStateTextbox = page.getByRole('textbox', { name: 'State *' });
        this.newAccountZipCode = '94105';
        this.newAccountZipcodeTextbox = page.locator('#zipcode');
        this.newsletterCheckbox = page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
        this.newUserSignUpHeading = page.getByRole('heading', { name: 'New User Signup!' });
        this.signUpButton = page.getByRole('button', { name: 'Signup' });
        this.loginToYourAccountText = 'Login to your account'
        this.loginToYourAccountHeader = page.locator('.login-form >> h2')
        this.loginPasswordTestbox = page.getByRole('textbox', { name: 'Password' })
        this.passwordLoginUser = 'playwrightautopass2'
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.incorrectPasswordText = page.getByText('Your email or password is incorrect!')
    }


    async fillAddress1Textbox(address1) {
        await this.newAccountAddress1Textbox.fill(address1);
    }
    
    async fillCityTextbox(city) {
        await this.newAccountCityTextbox.fill(city);
    }
    
    async fillEmailTextbox(email) {
        await this.emailTextbox.fill(email);
    }
    
    async fillFirstNameTextbox(name) {
        await this.newAccountFirstNameTextbox.fill(name);
    }
    
    async fillLastNameTextbox(name) {
        await this.newAccountLastNameTextbox.fill(name);
    }
    
    async fillMobileNumberTextbox(number) {
        await this.newAccountMobileNumberTextbox.fill(number);
    }
    
    async fillNameTextbox(user) {
        await this.nameTextbox.fill(user);
    }
    
    async fillNewAccountPasswordTextbox(password) {
        await this.newAccountPasswordTextbox.fill(password);
    }

    async fillLoginPasswordTextbox(password) {
        await this.loginPasswordTestbox.fill(password);
    }
    
    async fillSignUpEmailTextbox(email) {
        await this.emailSignUpTextbox.fill(email);
    }

    async fillLoginEmailTextbox(email) {
        await this.emailLoginTextbox.fill(email);
    }
    
    async fillStateTextbox(state) {
        await this.newAccountStateTextbox.fill(state);
    }
    
    async fillZipCodeTextbox(zipcode) {
        await this.newAccountZipcodeTextbox.fill(zipcode);
    }
    
    async isAccountCreatedMessageVisible() {
        await expect(this.accountCreatedText).toBeVisible();
    }
    
    async isAccountDeletedMessageVisible() {
        await expect(this.accountDeletedText).toBeVisible();
    }
    
    async isAccountNameVisible() {
        await expect(this.loggedInAs).toHaveText(/.* PlaywrightAutoTest1/);
    }

    async isAccountName2Visible() {
        await expect(this.loggedInAs).toHaveText(/.* PlaywrightAutoTest2/);
    }
    
    async isExistingSignUpMessageVisible() {
        await expect(this.existingSignUpMessage).toBeVisible();
    }
    
    async isNewUserSignUpHeadingVisible() {
        await expect(this.newUserSignUpHeading).toBeVisible();
    }
    
    async selectCountry(country) {
        await this.page.selectOption('select#country', country);
    }
    
    async selectDay(day) {
        await this.page.selectOption('select#days', day);
    }
    
    async selectMonth(month) {
        await this.page.selectOption('select#months', month);
    }
    
    async selectYear(year) {
        await this.page.selectOption('select#years', year);
    }

    async isLoginToYourAccountHeaderVisible() {
        await expect(this.loginToYourAccountHeader).toHaveText(this.loginToYourAccountText)
    }

    async isIncorrectPasswordVisible() {
        await expect(this.incorrectPasswordText).toBeVisible()
    }
    
}