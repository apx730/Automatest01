Feature:Login

   
    # Scenario Outline: Login With User:
    #     Given I login APX Page
    #     When I login input username with "<username>"
    #     And I login input password with "<password>"
    #     And Click login button 
    #     Then I should login in APX website

    #     Examples:
    #         | Header 1 | Header 2 | Header 3 |
    #         | Value 1  | Value 2  | Value 3  |

    Scenario:Login With Superadmin
        Given I login APX Page
        When I login input username with "superadmin@apx.group"
        And I login input password with "1234"
        And Click login button 
        Then I should login in APX website
