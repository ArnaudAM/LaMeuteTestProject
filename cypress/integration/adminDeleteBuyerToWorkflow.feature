Feature: Delete a workflow of a buyer

 Scenario: Should Delete a workflow of a buyer
    Given I am authenticated as Administrator
    When I delete a workflow of a buyer
    Then I have NOT the corresponding workflow name