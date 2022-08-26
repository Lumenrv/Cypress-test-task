require('cypress-xpath');
class SignUpPage {

    emailInput(){
        return cy.get('[id="email"]').first()
    }
    passwordInput(){
        return cy.get('[id="password"]')
    }
    nameInput(){
        return cy.get('[id="full_name"]')
    }
    checkBox(){
        return cy.get('[fill="white"]').first()
    }
    errorMessage(){
        return cy.get('[aria-label="signup-form_error"]')
    }
    createAccountBtn(){
        return cy.get('[type="submit"]').first()
    }
    emeailErrorMessage(){
        return cy.get('[id="email_error"]')
    }
    
   

    randomEmailGenerator(length=8) {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str + '@gmail.com';

    }
    randomPasswordGenerator(length=8) {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str + '#@#1';

    }
    randomNameGenerator(length=8) {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str + str;

    }

}

export default SignUpPage
