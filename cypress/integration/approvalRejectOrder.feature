Feature: Order dismiss

    Scenario: Approval reject order
        Given Approval on home page
        And An order is pending validation
        When Approval rejects the order
        And He confirms the reject
        Then "La commande a été rejetée" is displayed
        And order status is "Rejetée"