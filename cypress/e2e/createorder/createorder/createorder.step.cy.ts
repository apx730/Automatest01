///<reference types="cypress"/>

import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
Given("I login APX Page",()=>{

    cy.visit("/")
    
    })

    When("I login input username with{string}",(username:string)=>{

        cy.get('#email').type(username)

    })