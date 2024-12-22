Feature:Login


    #  Scenario Outline: Login with any user
    #     Given I am on the login Page
    #     When I input username "<username>"
    #     And I input password "<password>"
    #     And I click on the login button
    #     Then I should see "Welcome!"

    #     Examples:
    #         |username|password|
    #         |admin   |sandbox24|
    #         |manager |sandbox24|
    #         |teacher |sandbox24|

   Scenario: Login With admin
       Given I am on the login Page
       When I login with "admin" and "sandbox24"
       Then I should see "Welcome!"
