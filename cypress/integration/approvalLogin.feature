feature: login approval

    Scenario: Verification fonction login
        Given A user on home page 
        When The user follows on login link 
        And He enter valid credentials 
        Then Url contains '/ViewHomepage'
        And "Tableau de bord" is visible 
        And "Approbateur" is visible 
        