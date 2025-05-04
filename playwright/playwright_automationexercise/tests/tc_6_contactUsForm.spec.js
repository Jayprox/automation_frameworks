import {test, expect} from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { ContactUsForm } from '../pages/ContactUsForm'

// Update Test case 6. Not handling pop up, connat complete the last steps, verify message and return home
// update to handle uploading a test file
test('Test Case 6: Contact Us Form', async ({page}) => {
    const homePage = new HomePage(page)
    const contactUsForm = new ContactUsForm(page)

    // Home page
    await homePage.goToAutomationExercisePage()
    await homePage.contactUsLink.click()

    // Contact Us Form page
    await expect(page.getByText('Get In Touch')).toBeVisible()
    await contactUsForm.fillNameTextbox()
    await contactUsForm.fillEmailTextbox()
    await contactUsForm.fillSubjectTextbox()
    await contactUsForm.fillMessageTextbox()
    // research for Browse button

    // Handles popup dialog
    page.on('dialog', dialog => dialog.accept())
    await page.getByRole('button', {name: 'Submit'}).click()
})