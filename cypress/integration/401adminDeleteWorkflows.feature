Feature: Delete a workflow of a buyer

 Scenario: Should Delete a workflow of a buyer
    Given I am authenticated as Administrator
    When I delete workflows
    Then I have not items in workflow list