class ContactUsPage {
  getGetInTouch() {
    return cy.contains('Get In Touch');
  }

  enterName(name) {
    cy.get('input[data-qa="name"]').type(name);
  }

  enterEmail(email) {
    cy.get('input[data-qa="email"]').type(email);
  }

  enterSubject(subject) {
    cy.get('input[data-qa="subject"]').type(subject);
  }

  enterMessage(message) {
    cy.get('textarea[data-qa="message"]').type(message);
  }

  uploadFile(filePath) {
    cy.get('input[type="file"]').selectFile(filePath);
  }

  clickSubmit() {
    cy.get('input[data-qa="submit-button"]').click();
  }

  getSuccessMessage() {
    return cy.contains('Success! Your details have been submitted successfully.');
  }

  clickHome() {
    cy.get('a[href="/"]').contains('Home').click();
  }
}

export default new ContactUsPage();