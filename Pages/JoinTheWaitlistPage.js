require('cypress-xpath');
class JoinTheWaitlistPage {

    emailInput(){
        return cy.get('[id="Email"]')
    }
    lastNameInput(){
        return cy.get('[id="LastName"]')
    }
    nameInput(){
        return cy.get('[id="FirstName"]')
    }
    JoinTheWaitlistBtn(){
        return cy.get('[href="/products/storage"]').first()
    }
    JoinTheWaitlistBtn2(){
        return cy.get('[href="#form"]').first()
    }
    submitBtn(){
        return cy.get('[type="submit"]')
    }
    additionalInfoInput(){
        return cy.get('[id="Form_Additional_Information__c"]')
    }
    thankYouMessage(){
        return cy.xpath('//span[contains(text(),"Thanks for")]')
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

export default JoinTheWaitlistPage
