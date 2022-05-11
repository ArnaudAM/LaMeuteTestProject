Feature: Logout Approval admin

    Scenario: Approval admin is logging out
        Given A logged approval on home page
        And Approval follows my account link
        When he clicks on logout button
        Then url is "https://stg-fr.rajapack.xyz/"
        And "Se connecter" is visible
