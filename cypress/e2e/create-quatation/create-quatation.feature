Feature: Create Quotation

    Scenario: Create Quotation
        Given I am on login Page "superadmin@apx.group" and password "1234"
        And I click on the quotation list menu
        When I create a quotation and select "LTL-D"
        When I should see page header contais "Create Quotation LTL - D"
        When I choose HeaderName "APX Transport Network Company Limited"
        When I type "COM7" And Enter
        When I Select Contact name with "Attapol Wattanachinda"
        When I Enter Email "superadmin@apx.group"
        When Click Save Draft button
        When Will See "Success" And "Quotation successfully created"
        Then Click Ok
 
