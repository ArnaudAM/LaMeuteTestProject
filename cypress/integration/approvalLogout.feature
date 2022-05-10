Feature: Logout Approval

    Scenario: Approval is logging out
        Given A logged approval on home page
        When Approval follows my account link
        And he clicks on logout button
        Then url is "https://stg-fr.rajapack.xyz/"
        And "Se connecter" is visible
