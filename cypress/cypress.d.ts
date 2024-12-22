///<reference types="cypress" />

declare namespace Cypress{

interface Chainable{
    login(username:string,password:string):Chainable<Element>;
    selectMenuByLocator(elementLocator:string):Chainable<Element>;

}

}