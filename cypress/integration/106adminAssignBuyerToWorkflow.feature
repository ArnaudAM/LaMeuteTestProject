Feature: Assign a workflow to a buyer

 Scenario: Should assign a workflow to a buyer
    Given I am authenticated as Administrator
    When I assign a workflow to a buyer
    Then I have the corresponding workflow name