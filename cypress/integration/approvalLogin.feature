Feature: login approval
    @focus
    Scenario: Verification fonction login
        Given A user on home page
        When The user follows on login link
        And He enter valid credentials
        Then Url contains '/ViewHomepage'
        And "Tableau de bord" is visible
        And "Approbateur" is visible

    Scenario: Unsuccessful login
        Given A user on home page
        When The user follows on login link
        And A user enters invalid credentials
        Then An error message displayed "Couple login/mot de passe invalide"
