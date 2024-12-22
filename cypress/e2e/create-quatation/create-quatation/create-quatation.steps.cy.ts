///<reference types="cypress"/>

import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import { SidebarMenu } from "../../../support/sidebar-menu-commands";
import { QuotationCommands } from "../../../support/quataion-commands";

Given("I am on login Page {string} and password {string}",(username:string,password:string)=>{
    cy.visit("/")  
    cy.get('#email').type(username)
    cy.get('#password').type(password)
    cy.get('#login').click()
    })
When("I click on the quotation list menu",()=>{

SidebarMenu.clickQuatationList()

})
When("I create a quotation and select {string}",(quotationtype:string)=>{
//     cy.get('#createQuotationBtn').click()
// cy.get("#serviceType").select(quotationtype)
// cy.get('#createBtn').click()
QuotationCommands.clickCreateQuotationButton(quotationtype)

})
When("I should see page header contais {string}",(text:string)=>{ 
    QuotationCommands.verifyHeader(text)
})
When("I choose HeaderName {string}",(HeaderName:string)=>{ 
    QuotationCommands.ChooseHeadercompany(HeaderName)
})
When("I type {string} And Enter",(customername:string)=>{ 
    QuotationCommands.customername(customername)
})
When("I Select Contact name with {string}",(selectcontactname:string)=>{
    cy.wait(1000)
    QuotationCommands.selectcontact(selectcontactname)
})
When("I Enter Email {string}",(email:string)=>{
    
    QuotationCommands.inputemail(email)
})
When("Click Save Draft button",()=>{
    
    QuotationCommands.clickbtnSavedraft()
})
When("Will See {string} And {string}",(success:string,quataionsuccess:string)=>{
    
    QuotationCommands.vefirysuccesstext(success,quataionsuccess)
})
Then("Click Ok",()=>{
    
    QuotationCommands.clickok()
})