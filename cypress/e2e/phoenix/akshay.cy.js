/// <reference types="cypress" />
/*

*/

describe("login feature", function() {

    it("login test", ()=>{

        cy.visit("http://phoenix.techwithjatin.com");
        cy.get("[class='mat-focus-indicator fuse-mat-button-large w-full mt-6 ng-tns-c135-0 mat-flat-button mat-button-base mat-primary']").
        should("have.text", " Sign in ");

    })

})
