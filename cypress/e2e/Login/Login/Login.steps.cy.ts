///<reference types="cypress"/>

import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";


Given("I am on the login Page",()=>{

cy.visit("/")

})
When("I input username {string}",(username:string)=>{

cy.get('#username').type(username)
    
    })


When("I input password {string}",(password:string)=>{

cy.get('#password').type(password)
    })

When("I click on the login button",()=>{

       cy.get("#loginbtn").click()
            })
Then("I should see {string}",(text:string)=>{

         cy.contains(text)
})

When("I login with {string} and {string}",(username:string,password:string)=>{

    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get("#loginbtn").click()
})

When("I login with {string} and {string}",(username:string,password:string)=>{

    cy.login(username,password)
    cy.get("#loginbtn").click()

})