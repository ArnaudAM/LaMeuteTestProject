Feature: Create Minimum amount Workflow

 Scenario: Should create a Minimum amount workflow
    Given I am authenticated as Administrator
    When I create a Minimum amount workflow
    Then I have a validation message