Feature: valid order approval

    Scenario: Approval validates order
        Given Approval on home page
        And An order as status "En attente de validation"
        When Approval click on validates
        And He confirms validation
        Then "La commande a été validée" is display
        And The order as a status "Créée"


