Feature: Create Budget amount Workflow

 Scenario: Should create a Budget amount workflow
    Given I am authenticated as Administrator
    When I create a Budget amount workflow
    Then I have a validation message
