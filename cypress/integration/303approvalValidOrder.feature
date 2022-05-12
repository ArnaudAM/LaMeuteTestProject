Feature: valid order approval

    Scenario: Approval validates order
        Given Approval on home page
        And An order is pending validation
        When Approval click on validates
        And He confirms validation
        Then "La commande a été validée" is displayed
        And The order as a status "Créée"


