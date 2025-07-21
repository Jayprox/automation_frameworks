    export const user = {
        name: 'TestUser',
        email: `testuser_${Date.now()}@mail.com`,
        password: 'Test@1234',
        dob: 
          { 
            day: '10', 
            month: 'May', 
            year: '1990' 
          },
        firstName: 'Test',
        lastName: 'User',
        company: 'TestCompany',
        address1: '123 Main St',
        address2: 'Apt 4B',
        country: 'United States',
        state: 'Texas',
        city: 'Dallas',
        zipcode: '75001',
        mobile: '1234567890',
        subject: 'Test Subject',
        message: 'This is a test message.'
    };

    export const existingUser = {
      name: 'ExistingUser',
      email: 'testuser@mail.com',
      existingEmailMessage: 'Email Address already exist!',
    };

    export const registeredUser = {
        name: 'PlaywrightAutoTest2',
        email: 'playwrightautotest2@test.com',
        password: 'playwrightautopass2'
      };

    export const invalidUser = {
        email: 'invaliduser@test.com',
        password: 'wrongpassword',
        incorrectEmailPasswordMessage: 'Your email or password is incorrect!'
      };