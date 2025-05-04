export class ContactUsForm {

    constructor(page) {
        this.page = page
        this.nameTextbox = page.getByRole('textbox', {name: 'Name'})
        this.emailTextbox = page.getByRole('textbox', {name: 'Email', exact: true})
        this.subjectTextbox = page.getByRole('textbox', {name: 'Subject'})
        this.messageTextbox = page.getByRole('textbox', {name: 'Your Message Here'})
        this.name = 'PlaywrightAutoTest2';
        this.email = 'playwrightautotest2@test.com';
        this.subject = 'Testing Test Case 6';
        this.message = 'A Playwright automation test for Test Case 6';
    }

    async fillNameTextbox() {
        await this.nameTextbox.fill(this.name)
    }

    async fillEmailTextbox() {
        await this.emailTextbox.fill(this.email)
    }
    
    async fillSubjectTextbox() {
        await this.subjectTextbox.fill(this.subject)
    }

    async fillMessageTextbox() {
        await this.messageTextbox.fill(this.message)
    }



}