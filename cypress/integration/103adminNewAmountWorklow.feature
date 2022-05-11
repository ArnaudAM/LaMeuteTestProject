Feature: Create an Amount Workflow

 Scenario: Should Create an Amount Workflow
    Given I am authenticated as Administrator
    When I create an Amount workflow
    Then I have a validation message
